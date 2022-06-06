import {Express, Request, Response } from 'express';

// export function RequestHandler;
export type EndpointHandler = (req: Request, res: Response) => Express;
export type RequestHandler = Array<EndpointHandler> | EndpointHandler;
// export const RequestHandler: SingleRequestHandler | Array<SingleRequestHandler>;