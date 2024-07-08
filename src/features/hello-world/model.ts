import {useSignal, useSignalEffect} from '@preact/signals-react';
import {useQuery} from '@tanstack/react-query';
import {createModel} from 'shared/lib/create-model';
import {useEvent} from 'shared/lib/hooks/use-event';

export const HelloWorldModel = createModel((props: {defaultCapitalized?: boolean}) => {
  const capitalized$ = useSignal(props.defaultCapitalized ?? false);

  const set = useEvent((value: boolean) => (capitalized$.value = value));

  const {refetch} = useQuery({
    queryKey: ['text'],
    queryFn: () => Math.random(),
  });

  useSignalEffect(() => {
    refetch({cancelRefetch: capitalized$.value});
  });

  return {capitalized$, set, useQuery: useEvent(() => useQuery({queryKey: ['text']}))};
});
