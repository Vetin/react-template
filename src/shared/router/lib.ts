/* eslint-disable @typescript-eslint/no-explicit-any */
import {ParserHint, parser, route, type as rrtrType} from 'react-router-typesafe-routes/dom';
import * as v from 'valibot';

const type = (schema: v.BaseSchema<any, any, any>) =>
  rrtrType(
    //
    value => v.safeParse(schema, value),
    parser(getTypeHint(schema)),
  );

const getTypeHint = (schema: v.BaseSchema<any, any, any>) => schema.type as ParserHint;

export const routes = {
  main: route('', {
    searchParams: {promo: type(v.optional(v.string()))},
  }),
};
