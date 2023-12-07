import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsRequest } from "./types/example/example/query";
import { MsgUpdateParams } from "./types/example/example/tx";
import { QueryParamsResponse } from "./types/example/example/query";
import { GenesisState } from "./types/example/example/genesis";
import { Params } from "./types/example/example/params";
import { MsgUpdateParamsResponse } from "./types/example/example/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/example.example.QueryParamsRequest", QueryParamsRequest],
    ["/example.example.MsgUpdateParams", MsgUpdateParams],
    ["/example.example.QueryParamsResponse", QueryParamsResponse],
    ["/example.example.GenesisState", GenesisState],
    ["/example.example.Params", Params],
    ["/example.example.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }