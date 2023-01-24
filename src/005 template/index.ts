import { TransferMoney } from './transfer-money';
import { AuditTrail } from './audit-trail';

const auditTrail: AuditTrail = new AuditTrail();
const transferMoney: TransferMoney = new TransferMoney(auditTrail);

transferMoney.execute();
