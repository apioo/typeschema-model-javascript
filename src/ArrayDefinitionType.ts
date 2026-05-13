import type {CollectionDefinitionType} from "./CollectionDefinitionType";

/**
 * An ordered list of values where every item conforms to the same schema.
 */
export interface ArrayDefinitionType extends CollectionDefinitionType {
    type: "array"
}

