import type {DefinitionType} from "./DefinitionType";
import type {ReferencePropertyType} from "./ReferencePropertyType";
import type {PropertyType} from "./PropertyType";
import type {AnyPropertyType} from "./AnyPropertyType";
import type {ArrayPropertyType} from "./ArrayPropertyType";
import type {BooleanPropertyType} from "./BooleanPropertyType";
import type {GenericPropertyType} from "./GenericPropertyType";
import type {IntegerPropertyType} from "./IntegerPropertyType";
import type {MapPropertyType} from "./MapPropertyType";
import type {NumberPropertyType} from "./NumberPropertyType";
import type {StringPropertyType} from "./StringPropertyType";

/**
 * Represents a fixed-structure object (class/record). It supports inheritance and explicit property definitions.
 */
export interface StructDefinitionType extends DefinitionType {
    type: "struct"
    base?: boolean
    discriminator?: string
    mapping?: Record<string, string>
    parent?: ReferencePropertyType
    properties?: Record<string, AnyPropertyType|ArrayPropertyType|BooleanPropertyType|GenericPropertyType|IntegerPropertyType|MapPropertyType|NumberPropertyType|ReferencePropertyType|StringPropertyType>
}

