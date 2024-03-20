import Tab from '../Tab';
import '../../styles/TabList.scss';
import React from 'react';

interface Props {
  channels: string[];
}

const TabList = React.forwardRef<HTMLDivElement, Props>(
  function TabList(props, ref) {
    const { channels } = props;

    return (
      <div
        className={channels.length > 0 ? 'tablist' : 'tablist--empty'}
        ref={ref}
      >
        {channels?.map((channel) => <Tab channel={channel} key={channel} />)}
      </div>
    );
  },
);

export default TabList;
