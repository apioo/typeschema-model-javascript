import type {CollectionDefinitionType} from "./CollectionDefinitionType";

/**
 * Represents a key-value map with dynamic key names where all values conform to the same schema.
 */
export interface MapDefinitionType extends CollectionDefinitionType {
    type: "map"
}

