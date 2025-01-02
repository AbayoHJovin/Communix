// import { View, Text } from 'react-native'
// import React, { createContext, ReactNode, useState } from 'react'
// interface LeaderInterface{
//     isLeader:boolean;
//     // setIsLeader: (leader: boolean) => void;
// }
// export const LeaderContext = createContext<LeaderInterface | undefined>(undefined)

// interface LeaderInterfaceProps{
//     children: ReactNode
// }
// const CheckLeader:React.FC<LeaderInterfaceProps> = ({children}) => {
// const [isLeader,setIsLeader] = useState<boolean>(false);

//   return (
//    <LeaderContext.Provider value={{isLeader}}>
//     {children}
//    </LeaderContext.Provider>
//   )
// }

// export default CheckLeader