// 'use client';

// import { Flexbox } from '@lobehub/ui';
// import { memo } from 'react';

// import DailyBrief from '@/features/DailyBrief';
// import { useUserStore } from '@/store/user';
// import { authSelectors } from '@/store/user/slices/auth/selectors';

// import AgentSelect from './AgentSelect';
// import InputArea from './InputArea';
// import WelcomeText from './WelcomeText';

// const Home = memo(() => {
//   const isLogin = useUserStore(authSelectors.isLogin);

//   return (
//     <Flexbox gap={40}>
//       <Flexbox gap={24}>
//         <Flexbox gap={8}>
//           <AgentSelect />
//           <WelcomeText />
//         </Flexbox>
//         <InputArea />
//       </Flexbox>

//       {isLogin && (
//         <Flexbox gap={40}>
//           <DailyBrief />
//         </Flexbox>
//       )}
//     <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
//     </Flexbox>
//   );
// });

// export default Home;



'use client';

import { Flexbox } from '@lobehub/ui';
import { memo } from 'react';

import DailyBrief from '@/features/DailyBrief';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/slices/auth/selectors';

import AgentSelect from './AgentSelect';
import InputArea from './InputArea';
import WelcomeText from './WelcomeText';

const Home = memo(() => {
  const isLogin = useUserStore(authSelectors.isLogin);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background gradient — fixed so it covers viewport even on scroll */}
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      {/* Content */}
      <Flexbox
        align="center"
        gap={40}
        style={{
          margin: '0 auto',
          maxWidth: 800,
          padding: '64px 16px 24px',
          position: 'relative',
          zIndex: 1,
        }}
        width="100%"
      >
        <Flexbox gap={24} width="100%">
          <Flexbox align="center" gap={8} width="100%">
            <AgentSelect />
            <WelcomeText />
          </Flexbox>
          <InputArea />
        </Flexbox>

        {isLogin && (
          <Flexbox gap={40} width="100%">
            <DailyBrief />
          </Flexbox>
        )}
      </Flexbox>
    </div>
  );
});

export default Home;
