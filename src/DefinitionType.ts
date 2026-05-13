import type {ArrayDefinitionType} from "./ArrayDefinitionType";
import type {MapDefinitionType} from "./MapDefinitionType";
import type {StructDefinitionType} from "./StructDefinitionType";

/**
 * The base abstract type for all schema definitions. It provides metadata common to all types such as descriptions and deprecation status.
 */
export interface DefinitionType {
    deprecated?: boolean
    description?: string
    type?: string
}

