import './App.css'
import Contenedor from './components/Contenedor.jsx'
import ContenedorEstadoSesion from './components/ContenedorEstadoSesion.jsx'
import ContenedorPiePagina from './components/ContenedorPiePagina.jsx'
import Menu from './components/Menu/Menu.jsx'
import SaludoUsuario from './components/SaludoUsuario.jsx'
import ProveedorProducto from './context/ProveedorProducto.jsx'
import Rutas from './routes/Rutas.jsx'

function App() {
  return (
    <>
      <Contenedor titulo="Lista de la compra APP" clase="cabecera">
        <SaludoUsuario />
        <ContenedorEstadoSesion />
      </Contenedor>
      <Menu />
      <Contenedor clase="cuerpo">
        <ProveedorProducto>
            <Rutas />
        </ProveedorProducto>
      </Contenedor>
      <ContenedorPiePagina clase="piePagina" />
    </>
  )
}

/*
Políticas RLS de mis tablas en Supabase:

---

Tabla "lista":

alter policy "DELETE - Solo Propietarios"
on "public"."lista"
to authenticated
using (
codigo_propietario = auth.uid()
);

alter policy "INSERT - Solo Propietarios"
on "public"."lista"
to authenticated
with check (
codigo_propietario = auth.uid()
);

alter policy "SELECT - Propietarios y Administradores"
on "public"."lista"
to authenticated
using (
((codigo_propietario = auth.uid()) OR (EXISTS ( SELECT 1
   FROM roles
  WHERE ((roles.id_rol = auth.uid()) AND
  (roles.rol = 'administrador'::task_status)))))
);

alter policy "UPDATE - Solo Propietarios"
on "public"."lista"
to authenticated
using (
codigo_propietario = auth.uid()
) with check (
codigo_propietario = auth.uid()
);

---

Tabla "lista_producto":

alter policy "ALL - Solo Propietarios de la lista"
on "public"."lista_producto"
to authenticated
using (
(EXISTS ( SELECT 1
   FROM lista
  WHERE ((lista.id = lista_producto.id_lista) AND (lista.codigo_propietario = auth.uid()))))
) with check (
  (EXISTS ( SELECT 1
   FROM lista
  WHERE ((lista.id = lista_producto.id_lista) AND (lista.codigo_propietario = auth.uid()))))
);

alter policy "SELECT - Propietarios de lista y Admin"
on "public"."lista_producto"
to authenticated
using (
((EXISTS ( SELECT 1
   FROM lista
  WHERE ((lista.id = lista_producto.id_lista) AND (lista.codigo_propietario = auth.uid())))) OR (EXISTS ( SELECT 1
   FROM roles
);

---

Tabla "producto":

alter policy "ALL - Gestion solo para Administradores"
on "public"."producto"
to authenticated
using (
(EXISTS ( SELECT 1
   FROM roles
  WHERE ((roles.id_rol = auth.uid()) AND (roles.rol = 'administrador'::task_status))))
) with check (
  (EXISTS ( SELECT 1
   FROM roles
  WHERE ((roles.id_rol = auth.uid()) AND (roles.rol = 'administrador'::task_status))))
);

alter policy "SELECT - Lectura para autenticados"
on "public"."producto"
to authenticated
using (
true
);

---

Tabla "roles":

alter policy "SELECT - Todos los autenticados"
on "public"."roles"
to authenticated
using (
true
);

alter policy "UPDATE - Solo Administradores"
on "public"."roles"
to authenticated
using (
(EXISTS ( SELECT 1
   FROM roles roles_1
  WHERE ((roles_1.id_rol = auth.uid()) AND (roles_1.rol = 'administrador'::task_status))))
) with check (
  (EXISTS ( SELECT 1
   FROM roles roles_1
  WHERE ((roles_1.id_rol = auth.uid()) AND (roles_1.rol = 'administrador'::task_status))))
);

---

Tabla "perfiles":

alter policy "Usuarios pueden actualizar su perfil"
on "public"."perfiles"
to authenticated
using (
auth.uid() = id_usuario
) with check (
auth.uid() = id_usuario
);

alter policy "Usuarios pueden leer su perfil"
on "public"."perfiles"
to authenticated
using (
auth.uid() = id_usuario
);
___________________________________________________________________

Queries SQL creadas para mi base de datos en Supabase:

---

create trigger actualizar_display_name
after update of nombre on public.perfiles
for each row
execute function public.sincronizar_display_name();

---

create function public.sincronizar_display_name()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Solo si el nombre ha cambiado
  if new.nombre is distinct from old.nombre then
    update auth.users
    set raw_user_meta_data =
      jsonb_set(
        coalesce(raw_user_meta_data, '{}'),
        '{display_name}',
        to_jsonb(new.nombre),
        true
      )
    where id = new.id_usuario;
  end if;

  return new;
end;
$$;

---

create trigger crear_perfil_al_registrarse
after insert on auth.users
for each row
execute function public.insertar_perfil_usuario();

---

create function public.insertar_perfil_usuario()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.perfiles (id_usuario, nombre)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'display_name',
      new.email
    )
  );

  return new;
end;
$$;

---

create trigger crear_rol_al_registrarse
after insert on auth.users
for each row
execute function public.insertar_rol_usuario();

---

create function public.insertar_rol_usuario()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.roles (id_rol, correo, rol)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'rol', 'usuario')
  );

  return new;
end;
$$;

  */

export default App
