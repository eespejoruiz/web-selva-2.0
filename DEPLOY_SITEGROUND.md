# Guía de Despliegue en SiteGround

Esta guía explica cómo desplegar tu proyecto Next.js (`output: 'export'`) en SiteGround de manera limpia y profesional.

## 1. Preparación del Proyecto

El proyecto ya está configurado para exportación estática (`output: 'export'`) con:
- **Imágenes no optimizadas**: Para funcionar sin servidor de Next.js (`unoptimized: true`).
- **Trailing Slash**: Genera carpetas con `index.html` para URLs limpias (`trailingSlash: true`).
- **.htaccess**: Configurado en `public/.htaccess` para manejar errores 404, compresión Gzip, caché y forzar HTTPS.

## 2. Generar Archivos Estáticos

Ejecuta el siguiente comando en tu terminal para construir el proyecto:

```bash
npm run build
```

Este comando generará una carpeta llamada `out` en la raíz del proyecto. Esta carpeta contiene todos los archivos estáticos listos para subir.

## 3. Subir a SiteGround

1.  Accede a tu cuenta de SiteGround -> **Site Tools**.
2.  Ve a **Sitio web** -> **Gestor de Archivos**.
3.  Navega a la carpeta `public_html` de tu dominio.
4.  Si hay archivos por defecto (como `default.html` o `cgi-bin`), elimínalos o muévelos a una carpeta de respaldo.
5.  Sube el **contenido** de la carpeta `out` (no la carpeta `out` en sí, sino los archivos dentro de ella) a `public_html`.
    - Puedes comprimir el contenido de `out` en un archivo `.zip`, subirlo y descomprimirlo en el servidor para mayor rapidez.

## 4. Verificación

Una vez subidos los archivos:
1.  Visita tu dominio (ej. `https://tudominio.com`).
2.  Navega por las páginas (Nosotros, Servicios, etc.) para asegurar que las URLs funcionan correctamente.
3.  Verifica que las imágenes carguen bien.
4.  Prueba una URL inexistente (ej. `tudominio.com/algo-que-no-existe`) para ver tu página 404 personalizada.

## Notas Adicionales

- **Formularios**: Si usas formularios (como en Contacto), asegúrate de que el backend al que apuntan esté funcionando, ya que este despliegue es solo frontend estático.
- **Cambios**: Cada vez que hagas cambios en el código, debes ejecutar `npm run build` nuevamente y subir los archivos actualizados.
