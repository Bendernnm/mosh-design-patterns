export class AuthToken {
    signToken(appId: string, key: string): string {
        return `${appId} - ${key}`;
    }
}
