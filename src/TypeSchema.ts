import type {DefinitionType} from "./DefinitionType";
import type {ArrayDefinitionType} from "./ArrayDefinitionType";
import type {MapDefinitionType} from "./MapDefinitionType";
import type {StructDefinitionType} from "./StructDefinitionType";

/**
 * The root document object containing namespace imports, type definitions, and the root entry point.
 */
export interface TypeSchema {
    definitions?: Record<string, ArrayDefinitionType|MapDefinitionType|StructDefinitionType>
    import?: Record<string, string>
    root?: string
}

