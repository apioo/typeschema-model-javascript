import type {ArrayDefinitionType} from "./ArrayDefinitionType";
import type {MapDefinitionType} from "./MapDefinitionType";
import type {StructDefinitionType} from "./StructDefinitionType";

/**
 * The abstract base type for all schema definitions. It provides common metadata such as descriptions and deprecation status.
 */
export interface DefinitionType {
    deprecated?: boolean
    description?: string
    type?: string
}

