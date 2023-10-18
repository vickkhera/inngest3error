import { Inngest, EventSchemas, slugify } from "inngest";

type Events = {
    "test/hello.world": {
        data: {
            name: string;
        };
    };
};

function makeClient(name: string) {
    name = "Intelligent Inventory App " + name;

    return new Inngest({
        id: slugify(name),
        schemas: new EventSchemas().fromRecord<Events>()
    });
}

export const inngest_edge = makeClient("edge");
