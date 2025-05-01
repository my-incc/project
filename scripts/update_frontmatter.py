import os
import re
import toml

ruta_base = "/Users/crist/incresium/content/articulos"
patron = r"\+\+\+([\s\S]*?)\+\+\+"

for raiz, directorios, archivos in os.walk(ruta_base):
    # Calcula el nivel de profundidad
    nivel = raiz[len(ruta_base):].count(os.sep)
    if nivel == 1:  # Nivel 1 corresponde al segundo nivel (raíz es 0)
        for archivo in archivos:
            if archivo == "index.md":
                # print(type(archivo))
                # print(os.path.join(raiz, archivo))
                with open(os.path.join(raiz, archivo), "r", encoding="utf-8") as f:
                    contenido = f.read()
                    frontmatter = re.search(patron, contenido)
                    if frontmatter:
                        # Parsear el frontmatter como TOML
                        datos_toml = toml.loads(frontmatter.group(1))
                        # print("Frontmatter actual:", datos_toml)
                        if datos_toml['tags'] != []:
                            categoria = datos_toml['tags'][0]
                            datos_toml['categories'] = categoria
                            # Volver a convertirlo en formato TOML
                            nuevo_frontmatter = toml.dumps(datos_toml)

                            # Reemplazar el viejo frontmatter con el nuevo
                            contenido_modificado = re.sub(patron, f"+++{nuevo_frontmatter}+++", contenido)
                            # print(contenido_modificado)
    
                            # Guardar los cambios
                            with open(os.path.join(raiz, archivo), "w", encoding="utf-8") as archivo:
                                archivo.write(contenido_modificado)
