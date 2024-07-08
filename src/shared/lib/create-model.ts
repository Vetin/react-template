import {createContext, createElement, memo, PropsWithChildren, useContext} from 'react';

export const createModel = <P extends object, M>(useModel: (props: P) => M) => {
  const context = createContext(null as unknown as M);

  const Provider = memo((props: PropsWithChildren<P>) => {
    const model = useModel(props);

    return createElement(context.Provider, {value: model}, props.children);
  });

  const use = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const model = useContext(context);

    if (!model) throw Error('Can not find provider for model instance');

    return model;
  };

  return {Provider, use};
};
