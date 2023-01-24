import { AuditTrail } from './audit-trail';

export abstract class Task {
    constructor(private readonly auditTrail: AuditTrail) {
    }

    public execute(): void {
        this.auditTrail.record();

        this.doExecute();
    }

    protected abstract doExecute(): void;
}
