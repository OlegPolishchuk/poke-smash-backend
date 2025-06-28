
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Swipes
 * 
 */
export type Swipes = $Result.DefaultSelection<Prisma.$SwipesPayload>
/**
 * Model PokemonStats
 * 
 */
export type PokemonStats = $Result.DefaultSelection<Prisma.$PokemonStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SwipeType: {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
};

export type SwipeType = (typeof SwipeType)[keyof typeof SwipeType]

}

export type SwipeType = $Enums.SwipeType

export const SwipeType: typeof $Enums.SwipeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swipes`: Exposes CRUD operations for the **Swipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Swipes
    * const swipes = await prisma.swipes.findMany()
    * ```
    */
  get swipes(): Prisma.SwipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pokemonStats`: Exposes CRUD operations for the **PokemonStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PokemonStats
    * const pokemonStats = await prisma.pokemonStats.findMany()
    * ```
    */
  get pokemonStats(): Prisma.PokemonStatsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Swipes: 'Swipes',
    PokemonStats: 'PokemonStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "swipes" | "pokemonStats"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Swipes: {
        payload: Prisma.$SwipesPayload<ExtArgs>
        fields: Prisma.SwipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>
          }
          findFirst: {
            args: Prisma.SwipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>
          }
          findMany: {
            args: Prisma.SwipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>[]
          }
          create: {
            args: Prisma.SwipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>
          }
          createMany: {
            args: Prisma.SwipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>[]
          }
          delete: {
            args: Prisma.SwipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>
          }
          update: {
            args: Prisma.SwipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>
          }
          deleteMany: {
            args: Prisma.SwipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>[]
          }
          upsert: {
            args: Prisma.SwipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipesPayload>
          }
          aggregate: {
            args: Prisma.SwipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwipes>
          }
          groupBy: {
            args: Prisma.SwipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwipesCountArgs<ExtArgs>
            result: $Utils.Optional<SwipesCountAggregateOutputType> | number
          }
        }
      }
      PokemonStats: {
        payload: Prisma.$PokemonStatsPayload<ExtArgs>
        fields: Prisma.PokemonStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PokemonStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PokemonStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>
          }
          findFirst: {
            args: Prisma.PokemonStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PokemonStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>
          }
          findMany: {
            args: Prisma.PokemonStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>[]
          }
          create: {
            args: Prisma.PokemonStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>
          }
          createMany: {
            args: Prisma.PokemonStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PokemonStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>[]
          }
          delete: {
            args: Prisma.PokemonStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>
          }
          update: {
            args: Prisma.PokemonStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>
          }
          deleteMany: {
            args: Prisma.PokemonStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PokemonStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PokemonStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>[]
          }
          upsert: {
            args: Prisma.PokemonStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PokemonStatsPayload>
          }
          aggregate: {
            args: Prisma.PokemonStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePokemonStats>
          }
          groupBy: {
            args: Prisma.PokemonStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PokemonStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PokemonStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PokemonStatsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    swipes?: SwipesOmit
    pokemonStats?: PokemonStatsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Swipes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Swipes?: boolean | UserCountOutputTypeCountSwipesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    avatar: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    avatar: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    avatar: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    avatar?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    avatar?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    avatar?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string | null
    email: string | null
    avatar: string | null
    password: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    Swipes?: boolean | User$SwipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "avatar" | "password" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Swipes?: boolean | User$SwipesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Swipes: Prisma.$SwipesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string | null
      email: string | null
      avatar: string | null
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Swipes<T extends User$SwipesArgs<ExtArgs> = {}>(args?: Subset<T, User$SwipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Swipes
   */
  export type User$SwipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    where?: SwipesWhereInput
    orderBy?: SwipesOrderByWithRelationInput | SwipesOrderByWithRelationInput[]
    cursor?: SwipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipesScalarFieldEnum | SwipesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Swipes
   */

  export type AggregateSwipes = {
    _count: SwipesCountAggregateOutputType | null
    _avg: SwipesAvgAggregateOutputType | null
    _sum: SwipesSumAggregateOutputType | null
    _min: SwipesMinAggregateOutputType | null
    _max: SwipesMaxAggregateOutputType | null
  }

  export type SwipesAvgAggregateOutputType = {
    pokemon_id: number | null
  }

  export type SwipesSumAggregateOutputType = {
    pokemon_id: number | null
  }

  export type SwipesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    pokemon_id: number | null
    type: $Enums.SwipeType | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SwipesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    pokemon_id: number | null
    type: $Enums.SwipeType | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SwipesCountAggregateOutputType = {
    id: number
    user_id: number
    pokemon_id: number
    type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SwipesAvgAggregateInputType = {
    pokemon_id?: true
  }

  export type SwipesSumAggregateInputType = {
    pokemon_id?: true
  }

  export type SwipesMinAggregateInputType = {
    id?: true
    user_id?: true
    pokemon_id?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type SwipesMaxAggregateInputType = {
    id?: true
    user_id?: true
    pokemon_id?: true
    type?: true
    created_at?: true
    updated_at?: true
  }

  export type SwipesCountAggregateInputType = {
    id?: true
    user_id?: true
    pokemon_id?: true
    type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SwipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swipes to aggregate.
     */
    where?: SwipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipesOrderByWithRelationInput | SwipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Swipes
    **/
    _count?: true | SwipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SwipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SwipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwipesMaxAggregateInputType
  }

  export type GetSwipesAggregateType<T extends SwipesAggregateArgs> = {
        [P in keyof T & keyof AggregateSwipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwipes[P]>
      : GetScalarType<T[P], AggregateSwipes[P]>
  }




  export type SwipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipesWhereInput
    orderBy?: SwipesOrderByWithAggregationInput | SwipesOrderByWithAggregationInput[]
    by: SwipesScalarFieldEnum[] | SwipesScalarFieldEnum
    having?: SwipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwipesCountAggregateInputType | true
    _avg?: SwipesAvgAggregateInputType
    _sum?: SwipesSumAggregateInputType
    _min?: SwipesMinAggregateInputType
    _max?: SwipesMaxAggregateInputType
  }

  export type SwipesGroupByOutputType = {
    id: string
    user_id: string
    pokemon_id: number
    type: $Enums.SwipeType
    created_at: Date
    updated_at: Date
    _count: SwipesCountAggregateOutputType | null
    _avg: SwipesAvgAggregateOutputType | null
    _sum: SwipesSumAggregateOutputType | null
    _min: SwipesMinAggregateOutputType | null
    _max: SwipesMaxAggregateOutputType | null
  }

  type GetSwipesGroupByPayload<T extends SwipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwipesGroupByOutputType[P]>
            : GetScalarType<T[P], SwipesGroupByOutputType[P]>
        }
      >
    >


  export type SwipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pokemon_id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipes"]>

  export type SwipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pokemon_id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipes"]>

  export type SwipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    pokemon_id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipes"]>

  export type SwipesSelectScalar = {
    id?: boolean
    user_id?: boolean
    pokemon_id?: boolean
    type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SwipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "pokemon_id" | "type" | "created_at" | "updated_at", ExtArgs["result"]["swipes"]>
  export type SwipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SwipesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SwipesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SwipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Swipes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      pokemon_id: number
      type: $Enums.SwipeType
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["swipes"]>
    composites: {}
  }

  type SwipesGetPayload<S extends boolean | null | undefined | SwipesDefaultArgs> = $Result.GetResult<Prisma.$SwipesPayload, S>

  type SwipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwipesCountAggregateInputType | true
    }

  export interface SwipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Swipes'], meta: { name: 'Swipes' } }
    /**
     * Find zero or one Swipes that matches the filter.
     * @param {SwipesFindUniqueArgs} args - Arguments to find a Swipes
     * @example
     * // Get one Swipes
     * const swipes = await prisma.swipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwipesFindUniqueArgs>(args: SelectSubset<T, SwipesFindUniqueArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Swipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwipesFindUniqueOrThrowArgs} args - Arguments to find a Swipes
     * @example
     * // Get one Swipes
     * const swipes = await prisma.swipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwipesFindUniqueOrThrowArgs>(args: SelectSubset<T, SwipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Swipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipesFindFirstArgs} args - Arguments to find a Swipes
     * @example
     * // Get one Swipes
     * const swipes = await prisma.swipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwipesFindFirstArgs>(args?: SelectSubset<T, SwipesFindFirstArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Swipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipesFindFirstOrThrowArgs} args - Arguments to find a Swipes
     * @example
     * // Get one Swipes
     * const swipes = await prisma.swipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwipesFindFirstOrThrowArgs>(args?: SelectSubset<T, SwipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Swipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Swipes
     * const swipes = await prisma.swipes.findMany()
     * 
     * // Get first 10 Swipes
     * const swipes = await prisma.swipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swipesWithIdOnly = await prisma.swipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwipesFindManyArgs>(args?: SelectSubset<T, SwipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Swipes.
     * @param {SwipesCreateArgs} args - Arguments to create a Swipes.
     * @example
     * // Create one Swipes
     * const Swipes = await prisma.swipes.create({
     *   data: {
     *     // ... data to create a Swipes
     *   }
     * })
     * 
     */
    create<T extends SwipesCreateArgs>(args: SelectSubset<T, SwipesCreateArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Swipes.
     * @param {SwipesCreateManyArgs} args - Arguments to create many Swipes.
     * @example
     * // Create many Swipes
     * const swipes = await prisma.swipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwipesCreateManyArgs>(args?: SelectSubset<T, SwipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Swipes and returns the data saved in the database.
     * @param {SwipesCreateManyAndReturnArgs} args - Arguments to create many Swipes.
     * @example
     * // Create many Swipes
     * const swipes = await prisma.swipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Swipes and only return the `id`
     * const swipesWithIdOnly = await prisma.swipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwipesCreateManyAndReturnArgs>(args?: SelectSubset<T, SwipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Swipes.
     * @param {SwipesDeleteArgs} args - Arguments to delete one Swipes.
     * @example
     * // Delete one Swipes
     * const Swipes = await prisma.swipes.delete({
     *   where: {
     *     // ... filter to delete one Swipes
     *   }
     * })
     * 
     */
    delete<T extends SwipesDeleteArgs>(args: SelectSubset<T, SwipesDeleteArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Swipes.
     * @param {SwipesUpdateArgs} args - Arguments to update one Swipes.
     * @example
     * // Update one Swipes
     * const swipes = await prisma.swipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwipesUpdateArgs>(args: SelectSubset<T, SwipesUpdateArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Swipes.
     * @param {SwipesDeleteManyArgs} args - Arguments to filter Swipes to delete.
     * @example
     * // Delete a few Swipes
     * const { count } = await prisma.swipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwipesDeleteManyArgs>(args?: SelectSubset<T, SwipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Swipes
     * const swipes = await prisma.swipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwipesUpdateManyArgs>(args: SelectSubset<T, SwipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Swipes and returns the data updated in the database.
     * @param {SwipesUpdateManyAndReturnArgs} args - Arguments to update many Swipes.
     * @example
     * // Update many Swipes
     * const swipes = await prisma.swipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Swipes and only return the `id`
     * const swipesWithIdOnly = await prisma.swipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SwipesUpdateManyAndReturnArgs>(args: SelectSubset<T, SwipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Swipes.
     * @param {SwipesUpsertArgs} args - Arguments to update or create a Swipes.
     * @example
     * // Update or create a Swipes
     * const swipes = await prisma.swipes.upsert({
     *   create: {
     *     // ... data to create a Swipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Swipes we want to update
     *   }
     * })
     */
    upsert<T extends SwipesUpsertArgs>(args: SelectSubset<T, SwipesUpsertArgs<ExtArgs>>): Prisma__SwipesClient<$Result.GetResult<Prisma.$SwipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipesCountArgs} args - Arguments to filter Swipes to count.
     * @example
     * // Count the number of Swipes
     * const count = await prisma.swipes.count({
     *   where: {
     *     // ... the filter for the Swipes we want to count
     *   }
     * })
    **/
    count<T extends SwipesCountArgs>(
      args?: Subset<T, SwipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwipesAggregateArgs>(args: Subset<T, SwipesAggregateArgs>): Prisma.PrismaPromise<GetSwipesAggregateType<T>>

    /**
     * Group by Swipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwipesGroupByArgs['orderBy'] }
        : { orderBy?: SwipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Swipes model
   */
  readonly fields: SwipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Swipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Swipes model
   */
  interface SwipesFieldRefs {
    readonly id: FieldRef<"Swipes", 'String'>
    readonly user_id: FieldRef<"Swipes", 'String'>
    readonly pokemon_id: FieldRef<"Swipes", 'Int'>
    readonly type: FieldRef<"Swipes", 'SwipeType'>
    readonly created_at: FieldRef<"Swipes", 'DateTime'>
    readonly updated_at: FieldRef<"Swipes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Swipes findUnique
   */
  export type SwipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * Filter, which Swipes to fetch.
     */
    where: SwipesWhereUniqueInput
  }

  /**
   * Swipes findUniqueOrThrow
   */
  export type SwipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * Filter, which Swipes to fetch.
     */
    where: SwipesWhereUniqueInput
  }

  /**
   * Swipes findFirst
   */
  export type SwipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * Filter, which Swipes to fetch.
     */
    where?: SwipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipesOrderByWithRelationInput | SwipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swipes.
     */
    cursor?: SwipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swipes.
     */
    distinct?: SwipesScalarFieldEnum | SwipesScalarFieldEnum[]
  }

  /**
   * Swipes findFirstOrThrow
   */
  export type SwipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * Filter, which Swipes to fetch.
     */
    where?: SwipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipesOrderByWithRelationInput | SwipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Swipes.
     */
    cursor?: SwipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Swipes.
     */
    distinct?: SwipesScalarFieldEnum | SwipesScalarFieldEnum[]
  }

  /**
   * Swipes findMany
   */
  export type SwipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * Filter, which Swipes to fetch.
     */
    where?: SwipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Swipes to fetch.
     */
    orderBy?: SwipesOrderByWithRelationInput | SwipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Swipes.
     */
    cursor?: SwipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Swipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Swipes.
     */
    skip?: number
    distinct?: SwipesScalarFieldEnum | SwipesScalarFieldEnum[]
  }

  /**
   * Swipes create
   */
  export type SwipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * The data needed to create a Swipes.
     */
    data: XOR<SwipesCreateInput, SwipesUncheckedCreateInput>
  }

  /**
   * Swipes createMany
   */
  export type SwipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Swipes.
     */
    data: SwipesCreateManyInput | SwipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Swipes createManyAndReturn
   */
  export type SwipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * The data used to create many Swipes.
     */
    data: SwipesCreateManyInput | SwipesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Swipes update
   */
  export type SwipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * The data needed to update a Swipes.
     */
    data: XOR<SwipesUpdateInput, SwipesUncheckedUpdateInput>
    /**
     * Choose, which Swipes to update.
     */
    where: SwipesWhereUniqueInput
  }

  /**
   * Swipes updateMany
   */
  export type SwipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Swipes.
     */
    data: XOR<SwipesUpdateManyMutationInput, SwipesUncheckedUpdateManyInput>
    /**
     * Filter which Swipes to update
     */
    where?: SwipesWhereInput
    /**
     * Limit how many Swipes to update.
     */
    limit?: number
  }

  /**
   * Swipes updateManyAndReturn
   */
  export type SwipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * The data used to update Swipes.
     */
    data: XOR<SwipesUpdateManyMutationInput, SwipesUncheckedUpdateManyInput>
    /**
     * Filter which Swipes to update
     */
    where?: SwipesWhereInput
    /**
     * Limit how many Swipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Swipes upsert
   */
  export type SwipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * The filter to search for the Swipes to update in case it exists.
     */
    where: SwipesWhereUniqueInput
    /**
     * In case the Swipes found by the `where` argument doesn't exist, create a new Swipes with this data.
     */
    create: XOR<SwipesCreateInput, SwipesUncheckedCreateInput>
    /**
     * In case the Swipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwipesUpdateInput, SwipesUncheckedUpdateInput>
  }

  /**
   * Swipes delete
   */
  export type SwipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
    /**
     * Filter which Swipes to delete.
     */
    where: SwipesWhereUniqueInput
  }

  /**
   * Swipes deleteMany
   */
  export type SwipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Swipes to delete
     */
    where?: SwipesWhereInput
    /**
     * Limit how many Swipes to delete.
     */
    limit?: number
  }

  /**
   * Swipes without action
   */
  export type SwipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Swipes
     */
    select?: SwipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Swipes
     */
    omit?: SwipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipesInclude<ExtArgs> | null
  }


  /**
   * Model PokemonStats
   */

  export type AggregatePokemonStats = {
    _count: PokemonStatsCountAggregateOutputType | null
    _avg: PokemonStatsAvgAggregateOutputType | null
    _sum: PokemonStatsSumAggregateOutputType | null
    _min: PokemonStatsMinAggregateOutputType | null
    _max: PokemonStatsMaxAggregateOutputType | null
  }

  export type PokemonStatsAvgAggregateOutputType = {
    pokemon_id: number | null
    likes: number | null
    disliked: number | null
  }

  export type PokemonStatsSumAggregateOutputType = {
    pokemon_id: number | null
    likes: number | null
    disliked: number | null
  }

  export type PokemonStatsMinAggregateOutputType = {
    id: string | null
    pokemon_id: number | null
    likes: number | null
    disliked: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PokemonStatsMaxAggregateOutputType = {
    id: string | null
    pokemon_id: number | null
    likes: number | null
    disliked: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PokemonStatsCountAggregateOutputType = {
    id: number
    pokemon_id: number
    likes: number
    disliked: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PokemonStatsAvgAggregateInputType = {
    pokemon_id?: true
    likes?: true
    disliked?: true
  }

  export type PokemonStatsSumAggregateInputType = {
    pokemon_id?: true
    likes?: true
    disliked?: true
  }

  export type PokemonStatsMinAggregateInputType = {
    id?: true
    pokemon_id?: true
    likes?: true
    disliked?: true
    created_at?: true
    updated_at?: true
  }

  export type PokemonStatsMaxAggregateInputType = {
    id?: true
    pokemon_id?: true
    likes?: true
    disliked?: true
    created_at?: true
    updated_at?: true
  }

  export type PokemonStatsCountAggregateInputType = {
    id?: true
    pokemon_id?: true
    likes?: true
    disliked?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PokemonStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonStats to aggregate.
     */
    where?: PokemonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonStats to fetch.
     */
    orderBy?: PokemonStatsOrderByWithRelationInput | PokemonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PokemonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PokemonStats
    **/
    _count?: true | PokemonStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PokemonStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PokemonStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PokemonStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PokemonStatsMaxAggregateInputType
  }

  export type GetPokemonStatsAggregateType<T extends PokemonStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePokemonStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePokemonStats[P]>
      : GetScalarType<T[P], AggregatePokemonStats[P]>
  }




  export type PokemonStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PokemonStatsWhereInput
    orderBy?: PokemonStatsOrderByWithAggregationInput | PokemonStatsOrderByWithAggregationInput[]
    by: PokemonStatsScalarFieldEnum[] | PokemonStatsScalarFieldEnum
    having?: PokemonStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PokemonStatsCountAggregateInputType | true
    _avg?: PokemonStatsAvgAggregateInputType
    _sum?: PokemonStatsSumAggregateInputType
    _min?: PokemonStatsMinAggregateInputType
    _max?: PokemonStatsMaxAggregateInputType
  }

  export type PokemonStatsGroupByOutputType = {
    id: string
    pokemon_id: number
    likes: number
    disliked: number
    created_at: Date
    updated_at: Date
    _count: PokemonStatsCountAggregateOutputType | null
    _avg: PokemonStatsAvgAggregateOutputType | null
    _sum: PokemonStatsSumAggregateOutputType | null
    _min: PokemonStatsMinAggregateOutputType | null
    _max: PokemonStatsMaxAggregateOutputType | null
  }

  type GetPokemonStatsGroupByPayload<T extends PokemonStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PokemonStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PokemonStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PokemonStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PokemonStatsGroupByOutputType[P]>
        }
      >
    >


  export type PokemonStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemon_id?: boolean
    likes?: boolean
    disliked?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["pokemonStats"]>

  export type PokemonStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemon_id?: boolean
    likes?: boolean
    disliked?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["pokemonStats"]>

  export type PokemonStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pokemon_id?: boolean
    likes?: boolean
    disliked?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["pokemonStats"]>

  export type PokemonStatsSelectScalar = {
    id?: boolean
    pokemon_id?: boolean
    likes?: boolean
    disliked?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PokemonStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pokemon_id" | "likes" | "disliked" | "created_at" | "updated_at", ExtArgs["result"]["pokemonStats"]>

  export type $PokemonStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PokemonStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pokemon_id: number
      likes: number
      disliked: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["pokemonStats"]>
    composites: {}
  }

  type PokemonStatsGetPayload<S extends boolean | null | undefined | PokemonStatsDefaultArgs> = $Result.GetResult<Prisma.$PokemonStatsPayload, S>

  type PokemonStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PokemonStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PokemonStatsCountAggregateInputType | true
    }

  export interface PokemonStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PokemonStats'], meta: { name: 'PokemonStats' } }
    /**
     * Find zero or one PokemonStats that matches the filter.
     * @param {PokemonStatsFindUniqueArgs} args - Arguments to find a PokemonStats
     * @example
     * // Get one PokemonStats
     * const pokemonStats = await prisma.pokemonStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PokemonStatsFindUniqueArgs>(args: SelectSubset<T, PokemonStatsFindUniqueArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PokemonStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PokemonStatsFindUniqueOrThrowArgs} args - Arguments to find a PokemonStats
     * @example
     * // Get one PokemonStats
     * const pokemonStats = await prisma.pokemonStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PokemonStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PokemonStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonStatsFindFirstArgs} args - Arguments to find a PokemonStats
     * @example
     * // Get one PokemonStats
     * const pokemonStats = await prisma.pokemonStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PokemonStatsFindFirstArgs>(args?: SelectSubset<T, PokemonStatsFindFirstArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PokemonStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonStatsFindFirstOrThrowArgs} args - Arguments to find a PokemonStats
     * @example
     * // Get one PokemonStats
     * const pokemonStats = await prisma.pokemonStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PokemonStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PokemonStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PokemonStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PokemonStats
     * const pokemonStats = await prisma.pokemonStats.findMany()
     * 
     * // Get first 10 PokemonStats
     * const pokemonStats = await prisma.pokemonStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pokemonStatsWithIdOnly = await prisma.pokemonStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PokemonStatsFindManyArgs>(args?: SelectSubset<T, PokemonStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PokemonStats.
     * @param {PokemonStatsCreateArgs} args - Arguments to create a PokemonStats.
     * @example
     * // Create one PokemonStats
     * const PokemonStats = await prisma.pokemonStats.create({
     *   data: {
     *     // ... data to create a PokemonStats
     *   }
     * })
     * 
     */
    create<T extends PokemonStatsCreateArgs>(args: SelectSubset<T, PokemonStatsCreateArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PokemonStats.
     * @param {PokemonStatsCreateManyArgs} args - Arguments to create many PokemonStats.
     * @example
     * // Create many PokemonStats
     * const pokemonStats = await prisma.pokemonStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PokemonStatsCreateManyArgs>(args?: SelectSubset<T, PokemonStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PokemonStats and returns the data saved in the database.
     * @param {PokemonStatsCreateManyAndReturnArgs} args - Arguments to create many PokemonStats.
     * @example
     * // Create many PokemonStats
     * const pokemonStats = await prisma.pokemonStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PokemonStats and only return the `id`
     * const pokemonStatsWithIdOnly = await prisma.pokemonStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PokemonStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PokemonStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PokemonStats.
     * @param {PokemonStatsDeleteArgs} args - Arguments to delete one PokemonStats.
     * @example
     * // Delete one PokemonStats
     * const PokemonStats = await prisma.pokemonStats.delete({
     *   where: {
     *     // ... filter to delete one PokemonStats
     *   }
     * })
     * 
     */
    delete<T extends PokemonStatsDeleteArgs>(args: SelectSubset<T, PokemonStatsDeleteArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PokemonStats.
     * @param {PokemonStatsUpdateArgs} args - Arguments to update one PokemonStats.
     * @example
     * // Update one PokemonStats
     * const pokemonStats = await prisma.pokemonStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PokemonStatsUpdateArgs>(args: SelectSubset<T, PokemonStatsUpdateArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PokemonStats.
     * @param {PokemonStatsDeleteManyArgs} args - Arguments to filter PokemonStats to delete.
     * @example
     * // Delete a few PokemonStats
     * const { count } = await prisma.pokemonStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PokemonStatsDeleteManyArgs>(args?: SelectSubset<T, PokemonStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PokemonStats
     * const pokemonStats = await prisma.pokemonStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PokemonStatsUpdateManyArgs>(args: SelectSubset<T, PokemonStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PokemonStats and returns the data updated in the database.
     * @param {PokemonStatsUpdateManyAndReturnArgs} args - Arguments to update many PokemonStats.
     * @example
     * // Update many PokemonStats
     * const pokemonStats = await prisma.pokemonStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PokemonStats and only return the `id`
     * const pokemonStatsWithIdOnly = await prisma.pokemonStats.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PokemonStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PokemonStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PokemonStats.
     * @param {PokemonStatsUpsertArgs} args - Arguments to update or create a PokemonStats.
     * @example
     * // Update or create a PokemonStats
     * const pokemonStats = await prisma.pokemonStats.upsert({
     *   create: {
     *     // ... data to create a PokemonStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PokemonStats we want to update
     *   }
     * })
     */
    upsert<T extends PokemonStatsUpsertArgs>(args: SelectSubset<T, PokemonStatsUpsertArgs<ExtArgs>>): Prisma__PokemonStatsClient<$Result.GetResult<Prisma.$PokemonStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PokemonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonStatsCountArgs} args - Arguments to filter PokemonStats to count.
     * @example
     * // Count the number of PokemonStats
     * const count = await prisma.pokemonStats.count({
     *   where: {
     *     // ... the filter for the PokemonStats we want to count
     *   }
     * })
    **/
    count<T extends PokemonStatsCountArgs>(
      args?: Subset<T, PokemonStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PokemonStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PokemonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PokemonStatsAggregateArgs>(args: Subset<T, PokemonStatsAggregateArgs>): Prisma.PrismaPromise<GetPokemonStatsAggregateType<T>>

    /**
     * Group by PokemonStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PokemonStatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PokemonStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PokemonStatsGroupByArgs['orderBy'] }
        : { orderBy?: PokemonStatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PokemonStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPokemonStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PokemonStats model
   */
  readonly fields: PokemonStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PokemonStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PokemonStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PokemonStats model
   */
  interface PokemonStatsFieldRefs {
    readonly id: FieldRef<"PokemonStats", 'String'>
    readonly pokemon_id: FieldRef<"PokemonStats", 'Int'>
    readonly likes: FieldRef<"PokemonStats", 'Int'>
    readonly disliked: FieldRef<"PokemonStats", 'Int'>
    readonly created_at: FieldRef<"PokemonStats", 'DateTime'>
    readonly updated_at: FieldRef<"PokemonStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PokemonStats findUnique
   */
  export type PokemonStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * Filter, which PokemonStats to fetch.
     */
    where: PokemonStatsWhereUniqueInput
  }

  /**
   * PokemonStats findUniqueOrThrow
   */
  export type PokemonStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * Filter, which PokemonStats to fetch.
     */
    where: PokemonStatsWhereUniqueInput
  }

  /**
   * PokemonStats findFirst
   */
  export type PokemonStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * Filter, which PokemonStats to fetch.
     */
    where?: PokemonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonStats to fetch.
     */
    orderBy?: PokemonStatsOrderByWithRelationInput | PokemonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonStats.
     */
    cursor?: PokemonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonStats.
     */
    distinct?: PokemonStatsScalarFieldEnum | PokemonStatsScalarFieldEnum[]
  }

  /**
   * PokemonStats findFirstOrThrow
   */
  export type PokemonStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * Filter, which PokemonStats to fetch.
     */
    where?: PokemonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonStats to fetch.
     */
    orderBy?: PokemonStatsOrderByWithRelationInput | PokemonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PokemonStats.
     */
    cursor?: PokemonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PokemonStats.
     */
    distinct?: PokemonStatsScalarFieldEnum | PokemonStatsScalarFieldEnum[]
  }

  /**
   * PokemonStats findMany
   */
  export type PokemonStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * Filter, which PokemonStats to fetch.
     */
    where?: PokemonStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PokemonStats to fetch.
     */
    orderBy?: PokemonStatsOrderByWithRelationInput | PokemonStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PokemonStats.
     */
    cursor?: PokemonStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PokemonStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PokemonStats.
     */
    skip?: number
    distinct?: PokemonStatsScalarFieldEnum | PokemonStatsScalarFieldEnum[]
  }

  /**
   * PokemonStats create
   */
  export type PokemonStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a PokemonStats.
     */
    data: XOR<PokemonStatsCreateInput, PokemonStatsUncheckedCreateInput>
  }

  /**
   * PokemonStats createMany
   */
  export type PokemonStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PokemonStats.
     */
    data: PokemonStatsCreateManyInput | PokemonStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonStats createManyAndReturn
   */
  export type PokemonStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PokemonStats.
     */
    data: PokemonStatsCreateManyInput | PokemonStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PokemonStats update
   */
  export type PokemonStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a PokemonStats.
     */
    data: XOR<PokemonStatsUpdateInput, PokemonStatsUncheckedUpdateInput>
    /**
     * Choose, which PokemonStats to update.
     */
    where: PokemonStatsWhereUniqueInput
  }

  /**
   * PokemonStats updateMany
   */
  export type PokemonStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PokemonStats.
     */
    data: XOR<PokemonStatsUpdateManyMutationInput, PokemonStatsUncheckedUpdateManyInput>
    /**
     * Filter which PokemonStats to update
     */
    where?: PokemonStatsWhereInput
    /**
     * Limit how many PokemonStats to update.
     */
    limit?: number
  }

  /**
   * PokemonStats updateManyAndReturn
   */
  export type PokemonStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * The data used to update PokemonStats.
     */
    data: XOR<PokemonStatsUpdateManyMutationInput, PokemonStatsUncheckedUpdateManyInput>
    /**
     * Filter which PokemonStats to update
     */
    where?: PokemonStatsWhereInput
    /**
     * Limit how many PokemonStats to update.
     */
    limit?: number
  }

  /**
   * PokemonStats upsert
   */
  export type PokemonStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the PokemonStats to update in case it exists.
     */
    where: PokemonStatsWhereUniqueInput
    /**
     * In case the PokemonStats found by the `where` argument doesn't exist, create a new PokemonStats with this data.
     */
    create: XOR<PokemonStatsCreateInput, PokemonStatsUncheckedCreateInput>
    /**
     * In case the PokemonStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PokemonStatsUpdateInput, PokemonStatsUncheckedUpdateInput>
  }

  /**
   * PokemonStats delete
   */
  export type PokemonStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
    /**
     * Filter which PokemonStats to delete.
     */
    where: PokemonStatsWhereUniqueInput
  }

  /**
   * PokemonStats deleteMany
   */
  export type PokemonStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PokemonStats to delete
     */
    where?: PokemonStatsWhereInput
    /**
     * Limit how many PokemonStats to delete.
     */
    limit?: number
  }

  /**
   * PokemonStats without action
   */
  export type PokemonStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PokemonStats
     */
    select?: PokemonStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PokemonStats
     */
    omit?: PokemonStatsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    avatar: 'avatar',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SwipesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    pokemon_id: 'pokemon_id',
    type: 'type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SwipesScalarFieldEnum = (typeof SwipesScalarFieldEnum)[keyof typeof SwipesScalarFieldEnum]


  export const PokemonStatsScalarFieldEnum: {
    id: 'id',
    pokemon_id: 'pokemon_id',
    likes: 'likes',
    disliked: 'disliked',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PokemonStatsScalarFieldEnum = (typeof PokemonStatsScalarFieldEnum)[keyof typeof PokemonStatsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SwipeType'
   */
  export type EnumSwipeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeType'>
    


  /**
   * Reference to a field of type 'SwipeType[]'
   */
  export type ListEnumSwipeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Swipes?: SwipesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    Swipes?: SwipesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    Swipes?: SwipesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SwipesWhereInput = {
    AND?: SwipesWhereInput | SwipesWhereInput[]
    OR?: SwipesWhereInput[]
    NOT?: SwipesWhereInput | SwipesWhereInput[]
    id?: StringFilter<"Swipes"> | string
    user_id?: StringFilter<"Swipes"> | string
    pokemon_id?: IntFilter<"Swipes"> | number
    type?: EnumSwipeTypeFilter<"Swipes"> | $Enums.SwipeType
    created_at?: DateTimeFilter<"Swipes"> | Date | string
    updated_at?: DateTimeFilter<"Swipes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SwipesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pokemon_id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SwipesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_pokemon_id?: SwipesUser_idPokemon_idCompoundUniqueInput
    AND?: SwipesWhereInput | SwipesWhereInput[]
    OR?: SwipesWhereInput[]
    NOT?: SwipesWhereInput | SwipesWhereInput[]
    user_id?: StringFilter<"Swipes"> | string
    pokemon_id?: IntFilter<"Swipes"> | number
    type?: EnumSwipeTypeFilter<"Swipes"> | $Enums.SwipeType
    created_at?: DateTimeFilter<"Swipes"> | Date | string
    updated_at?: DateTimeFilter<"Swipes"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "user_id_pokemon_id">

  export type SwipesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    pokemon_id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SwipesCountOrderByAggregateInput
    _avg?: SwipesAvgOrderByAggregateInput
    _max?: SwipesMaxOrderByAggregateInput
    _min?: SwipesMinOrderByAggregateInput
    _sum?: SwipesSumOrderByAggregateInput
  }

  export type SwipesScalarWhereWithAggregatesInput = {
    AND?: SwipesScalarWhereWithAggregatesInput | SwipesScalarWhereWithAggregatesInput[]
    OR?: SwipesScalarWhereWithAggregatesInput[]
    NOT?: SwipesScalarWhereWithAggregatesInput | SwipesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Swipes"> | string
    user_id?: StringWithAggregatesFilter<"Swipes"> | string
    pokemon_id?: IntWithAggregatesFilter<"Swipes"> | number
    type?: EnumSwipeTypeWithAggregatesFilter<"Swipes"> | $Enums.SwipeType
    created_at?: DateTimeWithAggregatesFilter<"Swipes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Swipes"> | Date | string
  }

  export type PokemonStatsWhereInput = {
    AND?: PokemonStatsWhereInput | PokemonStatsWhereInput[]
    OR?: PokemonStatsWhereInput[]
    NOT?: PokemonStatsWhereInput | PokemonStatsWhereInput[]
    id?: StringFilter<"PokemonStats"> | string
    pokemon_id?: IntFilter<"PokemonStats"> | number
    likes?: IntFilter<"PokemonStats"> | number
    disliked?: IntFilter<"PokemonStats"> | number
    created_at?: DateTimeFilter<"PokemonStats"> | Date | string
    updated_at?: DateTimeFilter<"PokemonStats"> | Date | string
  }

  export type PokemonStatsOrderByWithRelationInput = {
    id?: SortOrder
    pokemon_id?: SortOrder
    likes?: SortOrder
    disliked?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PokemonStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pokemon_id?: number
    AND?: PokemonStatsWhereInput | PokemonStatsWhereInput[]
    OR?: PokemonStatsWhereInput[]
    NOT?: PokemonStatsWhereInput | PokemonStatsWhereInput[]
    likes?: IntFilter<"PokemonStats"> | number
    disliked?: IntFilter<"PokemonStats"> | number
    created_at?: DateTimeFilter<"PokemonStats"> | Date | string
    updated_at?: DateTimeFilter<"PokemonStats"> | Date | string
  }, "id" | "pokemon_id">

  export type PokemonStatsOrderByWithAggregationInput = {
    id?: SortOrder
    pokemon_id?: SortOrder
    likes?: SortOrder
    disliked?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PokemonStatsCountOrderByAggregateInput
    _avg?: PokemonStatsAvgOrderByAggregateInput
    _max?: PokemonStatsMaxOrderByAggregateInput
    _min?: PokemonStatsMinOrderByAggregateInput
    _sum?: PokemonStatsSumOrderByAggregateInput
  }

  export type PokemonStatsScalarWhereWithAggregatesInput = {
    AND?: PokemonStatsScalarWhereWithAggregatesInput | PokemonStatsScalarWhereWithAggregatesInput[]
    OR?: PokemonStatsScalarWhereWithAggregatesInput[]
    NOT?: PokemonStatsScalarWhereWithAggregatesInput | PokemonStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PokemonStats"> | string
    pokemon_id?: IntWithAggregatesFilter<"PokemonStats"> | number
    likes?: IntWithAggregatesFilter<"PokemonStats"> | number
    disliked?: IntWithAggregatesFilter<"PokemonStats"> | number
    created_at?: DateTimeWithAggregatesFilter<"PokemonStats"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"PokemonStats"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username?: string | null
    email?: string | null
    avatar?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Swipes?: SwipesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username?: string | null
    email?: string | null
    avatar?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    Swipes?: SwipesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Swipes?: SwipesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Swipes?: SwipesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username?: string | null
    email?: string | null
    avatar?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipesCreateInput = {
    id?: string
    pokemon_id: number
    type: $Enums.SwipeType
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSwipesInput
  }

  export type SwipesUncheckedCreateInput = {
    id?: string
    user_id: string
    pokemon_id: number
    type: $Enums.SwipeType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwipesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSwipeTypeFieldUpdateOperationsInput | $Enums.SwipeType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSwipesNestedInput
  }

  export type SwipesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSwipeTypeFieldUpdateOperationsInput | $Enums.SwipeType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipesCreateManyInput = {
    id?: string
    user_id: string
    pokemon_id: number
    type: $Enums.SwipeType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwipesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSwipeTypeFieldUpdateOperationsInput | $Enums.SwipeType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSwipeTypeFieldUpdateOperationsInput | $Enums.SwipeType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonStatsCreateInput = {
    id?: string
    pokemon_id: number
    likes?: number
    disliked?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PokemonStatsUncheckedCreateInput = {
    id?: string
    pokemon_id: number
    likes?: number
    disliked?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PokemonStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    disliked?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    disliked?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonStatsCreateManyInput = {
    id?: string
    pokemon_id: number
    likes?: number
    disliked?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PokemonStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    disliked?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PokemonStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    disliked?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SwipesListRelationFilter = {
    every?: SwipesWhereInput
    some?: SwipesWhereInput
    none?: SwipesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SwipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumSwipeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeType | EnumSwipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeTypeFilter<$PrismaModel> | $Enums.SwipeType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SwipesUser_idPokemon_idCompoundUniqueInput = {
    user_id: string
    pokemon_id: number
  }

  export type SwipesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pokemon_id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SwipesAvgOrderByAggregateInput = {
    pokemon_id?: SortOrder
  }

  export type SwipesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pokemon_id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SwipesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    pokemon_id?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SwipesSumOrderByAggregateInput = {
    pokemon_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumSwipeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeType | EnumSwipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SwipeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeTypeFilter<$PrismaModel>
    _max?: NestedEnumSwipeTypeFilter<$PrismaModel>
  }

  export type PokemonStatsCountOrderByAggregateInput = {
    id?: SortOrder
    pokemon_id?: SortOrder
    likes?: SortOrder
    disliked?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PokemonStatsAvgOrderByAggregateInput = {
    pokemon_id?: SortOrder
    likes?: SortOrder
    disliked?: SortOrder
  }

  export type PokemonStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    pokemon_id?: SortOrder
    likes?: SortOrder
    disliked?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PokemonStatsMinOrderByAggregateInput = {
    id?: SortOrder
    pokemon_id?: SortOrder
    likes?: SortOrder
    disliked?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PokemonStatsSumOrderByAggregateInput = {
    pokemon_id?: SortOrder
    likes?: SortOrder
    disliked?: SortOrder
  }

  export type SwipesCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipesCreateWithoutUserInput, SwipesUncheckedCreateWithoutUserInput> | SwipesCreateWithoutUserInput[] | SwipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipesCreateOrConnectWithoutUserInput | SwipesCreateOrConnectWithoutUserInput[]
    createMany?: SwipesCreateManyUserInputEnvelope
    connect?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
  }

  export type SwipesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipesCreateWithoutUserInput, SwipesUncheckedCreateWithoutUserInput> | SwipesCreateWithoutUserInput[] | SwipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipesCreateOrConnectWithoutUserInput | SwipesCreateOrConnectWithoutUserInput[]
    createMany?: SwipesCreateManyUserInputEnvelope
    connect?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SwipesUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipesCreateWithoutUserInput, SwipesUncheckedCreateWithoutUserInput> | SwipesCreateWithoutUserInput[] | SwipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipesCreateOrConnectWithoutUserInput | SwipesCreateOrConnectWithoutUserInput[]
    upsert?: SwipesUpsertWithWhereUniqueWithoutUserInput | SwipesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipesCreateManyUserInputEnvelope
    set?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    disconnect?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    delete?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    connect?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    update?: SwipesUpdateWithWhereUniqueWithoutUserInput | SwipesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipesUpdateManyWithWhereWithoutUserInput | SwipesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipesScalarWhereInput | SwipesScalarWhereInput[]
  }

  export type SwipesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipesCreateWithoutUserInput, SwipesUncheckedCreateWithoutUserInput> | SwipesCreateWithoutUserInput[] | SwipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipesCreateOrConnectWithoutUserInput | SwipesCreateOrConnectWithoutUserInput[]
    upsert?: SwipesUpsertWithWhereUniqueWithoutUserInput | SwipesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipesCreateManyUserInputEnvelope
    set?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    disconnect?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    delete?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    connect?: SwipesWhereUniqueInput | SwipesWhereUniqueInput[]
    update?: SwipesUpdateWithWhereUniqueWithoutUserInput | SwipesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipesUpdateManyWithWhereWithoutUserInput | SwipesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipesScalarWhereInput | SwipesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSwipesInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumSwipeTypeFieldUpdateOperationsInput = {
    set?: $Enums.SwipeType
  }

  export type UserUpdateOneRequiredWithoutSwipesNestedInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    upsert?: UserUpsertWithoutSwipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwipesInput, UserUpdateWithoutSwipesInput>, UserUncheckedUpdateWithoutSwipesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSwipeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeType | EnumSwipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeTypeFilter<$PrismaModel> | $Enums.SwipeType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSwipeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeType | EnumSwipeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeType[] | ListEnumSwipeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeTypeWithAggregatesFilter<$PrismaModel> | $Enums.SwipeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeTypeFilter<$PrismaModel>
    _max?: NestedEnumSwipeTypeFilter<$PrismaModel>
  }

  export type SwipesCreateWithoutUserInput = {
    id?: string
    pokemon_id: number
    type: $Enums.SwipeType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwipesUncheckedCreateWithoutUserInput = {
    id?: string
    pokemon_id: number
    type: $Enums.SwipeType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwipesCreateOrConnectWithoutUserInput = {
    where: SwipesWhereUniqueInput
    create: XOR<SwipesCreateWithoutUserInput, SwipesUncheckedCreateWithoutUserInput>
  }

  export type SwipesCreateManyUserInputEnvelope = {
    data: SwipesCreateManyUserInput | SwipesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SwipesUpsertWithWhereUniqueWithoutUserInput = {
    where: SwipesWhereUniqueInput
    update: XOR<SwipesUpdateWithoutUserInput, SwipesUncheckedUpdateWithoutUserInput>
    create: XOR<SwipesCreateWithoutUserInput, SwipesUncheckedCreateWithoutUserInput>
  }

  export type SwipesUpdateWithWhereUniqueWithoutUserInput = {
    where: SwipesWhereUniqueInput
    data: XOR<SwipesUpdateWithoutUserInput, SwipesUncheckedUpdateWithoutUserInput>
  }

  export type SwipesUpdateManyWithWhereWithoutUserInput = {
    where: SwipesScalarWhereInput
    data: XOR<SwipesUpdateManyMutationInput, SwipesUncheckedUpdateManyWithoutUserInput>
  }

  export type SwipesScalarWhereInput = {
    AND?: SwipesScalarWhereInput | SwipesScalarWhereInput[]
    OR?: SwipesScalarWhereInput[]
    NOT?: SwipesScalarWhereInput | SwipesScalarWhereInput[]
    id?: StringFilter<"Swipes"> | string
    user_id?: StringFilter<"Swipes"> | string
    pokemon_id?: IntFilter<"Swipes"> | number
    type?: EnumSwipeTypeFilter<"Swipes"> | $Enums.SwipeType
    created_at?: DateTimeFilter<"Swipes"> | Date | string
    updated_at?: DateTimeFilter<"Swipes"> | Date | string
  }

  export type UserCreateWithoutSwipesInput = {
    id?: string
    username?: string | null
    email?: string | null
    avatar?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUncheckedCreateWithoutSwipesInput = {
    id?: string
    username?: string | null
    email?: string | null
    avatar?: string | null
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserCreateOrConnectWithoutSwipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
  }

  export type UserUpsertWithoutSwipesInput = {
    update: XOR<UserUpdateWithoutSwipesInput, UserUncheckedUpdateWithoutSwipesInput>
    create: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwipesInput, UserUncheckedUpdateWithoutSwipesInput>
  }

  export type UserUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipesCreateManyUserInput = {
    id?: string
    pokemon_id: number
    type: $Enums.SwipeType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SwipesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSwipeTypeFieldUpdateOperationsInput | $Enums.SwipeType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSwipeTypeFieldUpdateOperationsInput | $Enums.SwipeType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SwipesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pokemon_id?: IntFieldUpdateOperationsInput | number
    type?: EnumSwipeTypeFieldUpdateOperationsInput | $Enums.SwipeType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}