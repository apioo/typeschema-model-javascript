import type {CollectionDefinitionType} from "./CollectionDefinitionType";

/**
 * An object with a dynamic set of keys where every value conforms to the same schema.
 */
export interface MapDefinitionType extends CollectionDefinitionType {
    type: "map"
}

