import type {CollectionDefinitionType} from "./CollectionDefinitionType";

/**
 * Represents an ordered list of elements where every item conforms to the same schema.
 */
export interface ArrayDefinitionType extends CollectionDefinitionType {
    type: "array"
}

