import fs from 'node:fs/promises';
import path from 'node:path';
import openapiTS, { astToString } from 'openapi-typescript';

interface SchemaGeneratorOptions {
    outputPath: string;
    schemaUrl: string;
    headerInject?: string;
}

/**
 * Generates TypeScript types from a JSON/OpenAPI schema URL
 */
const generateSchemaTypes = async (options: SchemaGeneratorOptions): Promise<void> => {
    try {
        const ast = await openapiTS(new URL(options.schemaUrl), {
            silent: false,
            inject: options.headerInject,
        });

        const typeDefinitions = astToString(ast);
        const outputDir = path.dirname(options.outputPath);
        await fs.mkdir(outputDir, { recursive: true });
        await fs.writeFile(options.outputPath, typeDefinitions, 'utf-8');

        console.log(`✅ Schema types generated successfully at: ${options.outputPath}`);
    } catch (error) {
        console.error('❌ Failed to generate schema types:', error);
        throw error;
    }
};

// Self-executing async function
(async () => {
    try {
        await generateSchemaTypes({
            schemaUrl: 'http://localhost:3001/swagger/json',
            outputPath: './src/types/generated/api-types.ts',
        });
    } catch (error) {
        console.error('Failed to execute generator:', error);
        process.exit(1);
    }
})();
