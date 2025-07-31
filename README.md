# Chop MCP TypeScript

Este proyecto implementa un servidor MCP (Model Context Protocol) para interactuar con el sistema de Setups de Chop. Proporciona una interfaz para obtener información de setups a través de una API REST.

<a href="https://glama.ai/mcp/servers/@LucasDelgado/mcp-ts">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@LucasDelgado/mcp-ts/badge" alt="Chop TypeScript MCP server" />
</a>

## Características

- Implementación del Model Context Protocol (MCP)
- Herramienta para obtener información de setups por ID
- Comunicación con API REST local
- Implementado en TypeScript con tipado estricto

## Requisitos Previos

- Node.js (versión recomendada: >= 16)
- npm o yarn
- TypeScript


2. Instala las dependencias:
```bash
npm install
```

## Configuración

El proyecto utiliza TypeScript y está configurado con `tsconfig.json`. Las principales dependencias incluyen:

- `@modelcontextprotocol/sdk`: SDK para implementación de MCP
- `axios`: Cliente HTTP para realizar peticiones
- `zod`: Validación de esquemas
- TypeScript y herramientas de desarrollo relacionadas

## Uso

Para iniciar el servidor MCP:

```bash
npm start
```

### Herramientas Disponibles

#### obtener-setup

Esta herramienta permite obtener información detallada de un setup específico.

Parámetros:
- `setup_id` (number): El ID del setup a consultar

Ejemplo de uso:
```typescript
// La herramienta se conecta a http://localhost:8080/backoffice/setup/{setup_id}
// y devuelve la información del setup en formato JSON
```

## Estructura del Proyecto

- `main.ts`: Punto de entrada de la aplicación y configuración del servidor MCP
- `types.ts`: Definiciones de tipos TypeScript
- `package.json`: Configuración del proyecto y dependencias
- `tsconfig.json`: Configuración de TypeScript

## Scripts Disponibles

- `npm start`: Inicia el servidor MCP
- `npm run build`: Compila el proyecto TypeScript

## Desarrollo

Para contribuir al proyecto:

1. Asegúrate de tener todas las dependencias instaladas
2. Realiza tus cambios en una nueva rama
3. Ejecuta las pruebas (cuando estén implementadas)
4. Envía un pull request

## Add to client LLM

- Agregarlo al client modo Dev
```JSON  
    "ChopSetup-ts": {
      "command": "npx",
      "args": [
        "-y",
        "tsx",
        "{your}/chop-mcp-ts/main.ts"
      ]
    }
```
- Correr el debug
- `npx -y @modelcontextprotocol/inspector npx -y tsx main.ts`: Compila el proyecto TypeScript