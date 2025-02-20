import { useMessages, useModified } from '@/components/hooks';
import {
  Button,
  Icon,
  Icons,
  Modal,
  Dialog,
  DialogTrigger,
  Text,
  useToast,
} from '@umami/react-zen';
import { WebsiteAddForm } from './WebsiteAddForm';

export function WebsiteAddButton({ teamId, onSave }: { teamId: string; onSave?: () => void }) {
  const { formatMessage, labels, messages } = useMessages();
  const { toast } = useToast();
  const { touch } = useModified();

  const handleSave = async () => {
    toast(formatMessage(messages.saved));
    touch('websites');
    onSave?.();
  };

  return (
    <DialogTrigger>
      <Button data-test="button-website-add" variant="primary">
        <Icon>
          <Icons.Plus />
        </Icon>
        <Text>{formatMessage(labels.addWebsite)}</Text>
      </Button>
      <Modal>
        <Dialog title={formatMessage(labels.addWebsite)}>
          {({ close }) => <WebsiteAddForm teamId={teamId} onSave={handleSave} onClose={close} />}
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
}
