import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

const holaTessssts => {}

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("2-200-90ac23799f42729c00a8", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('2-200-90ac23799f42729c00a8', {
    connection: 'azureQueueConnection',
    queueName: '2-200-90ac23799f42729c00a8',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});