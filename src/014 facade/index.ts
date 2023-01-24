import { NotificationService } from './notification-service';

const notificationService: NotificationService = new NotificationService();

notificationService.send('hey', 'friend');
