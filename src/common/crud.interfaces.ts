export interface CRUD {
    list: (limit: number, page: number) => Promise<any>;
    create: (resource: any) => Promise<any>;
    putById: (_id: string, resource: any) => Promise<string>;
    readById: (_id: string) => Promise<any>;
    // deleteById: (id: string) => Promise<string>;
    patchById: (_id: string, resource: any) => Promise<string>;
}
