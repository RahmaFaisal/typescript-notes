////////////////// primitive types //////////////////

        //   
        // number 
        // boolean
        // Array<>
        // type[]

////////////////// Union types //////////////////

// A union type is a type formed from two or more other types

        // id: number | string

    // we need to use typeof keyword to decide which type is currently used





//////////////////// Differences Between Type Aliases and Interfaces ////////////////////

        // Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
        //  Almost all features of an interface are available in type, 
        //  the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.



////////////////////       Type Assertions ////////////////////

// has two syntax : 
            // as HTMLCanvasElement using as keyword
            // angle-bracket <HTMLCanvasElement> using angle-bracket 






//////////////////// Narrowing //////////

//  typeof 
    // "string"
    // "number"
    // "bigint"
    // "boolean"
    // "symbol"
    // "undefined"
    // "object"
    // "function"



// 


// in operator
//  key in Obj


// instanceof 
// obj instanceof Class


// Discriminated unions
// add custom attrubite to type ex : "Kind"

// keyof
// type P = keyof Point; keyof operator takes an object type and produces a string or numeric literal union of its keys



//////////////////// Generics ////////////////////////

// Used for  creating reusable components ,able to create a component that can work over a variety of types rather than a single one
// function x<Type>(arg: Type): Type {
//         return arg;
//       }
// x<string>  , x<number> 


//////////////////// Utility Types ////////////////////
// Awaited<Type>
// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<UnionType, ExcludedMembers>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>
// ThisParameterType<Type>
// OmitThisParameter<Type>
// ThisType<Type>
// Intrinsic String Manipulation Types
// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>


// namespace is a key word that only exists in typescript in order to scope some 
// code together , the replacement in javascript is a globle object that holds all 
// the code we want to group 

//Es modules only understaned in new browsers , which give us a feature of code splitting and 
// import and export code we need  , code in es module only run once , first time we import it 
// modules are the official standard format to package JavaScript code for reuse.
//  Modules are defined using a variety of import and export statements
