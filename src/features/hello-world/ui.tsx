import {T, useTranslate, withNamespace} from 'shared/i18n';
import {Flex} from 'shared/ui/flex';
import {Text} from 'shared/ui/text';
import {HelloWorldModel} from './model';

import {Checkbox} from 'shared/ui/checkbox';
import {Group} from 'shared/ui/group';

const Title = () => {
  const model = HelloWorldModel.use();

  const {data} = model.useQuery();

  return (
    <Group>
      <Text style={{textTransform: model.capitalized$.value ? 'capitalize' : 'none'}}>
        capitalized {model.capitalized$}
      </Text>
      <div>
        <Checkbox checked={model.capitalized$.value} onChange={e => model.set(e.target.checked)} label="test" />
      </div>

      <Text size="xl">refetched at {data as string}</Text>
    </Group>
  );
};

export const HelloWorld = withNamespace(import.meta.url, () => {
  const {t} = useTranslate();

  return (
    <HelloWorldModel.Provider defaultCapitalized={true}>
      <Flex gap="md">
        <T keyName="title" defaultValue="Hello world!" />

        <Text>{t('description', 'I am description')}</Text>

        <Title />
      </Flex>
    </HelloWorldModel.Provider>
  );
});
