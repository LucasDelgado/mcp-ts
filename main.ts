import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import axios from 'axios';
import { z } from 'zod';
import { Setup } from './types.js';

const server = new McpServer({
  name: 'ChopSetup',
  version: '1.0.0'
});

server.tool(
    "obtener-setup",
    {
        setup_id: z.number().describe('El id del setup a obtener')
    },
    async ({ setup_id }) => {
        const url = `http://localhost:8080/backoffice/setup/${setup_id}`;
        
        const response = await axios.get<Setup>(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        return {
            content: [{
                type: 'text',
                text: JSON.stringify(response.data, null, 2)
            }]
        };
    }
);

const transport = new StdioServerTransport();
await server.connect(transport);
