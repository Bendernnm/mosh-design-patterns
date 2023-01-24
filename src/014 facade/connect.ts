export class Connect {
    connect(ip: string): void {
        console.log('connected to', ip);
    };

    disconnect(): void {
        console.log('close connection');
    }
}
