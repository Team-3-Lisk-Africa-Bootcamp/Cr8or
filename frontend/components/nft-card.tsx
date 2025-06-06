
// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Heart, Play, Eye } from "lucide-react"
// import Link from "next/link"
// import { useState } from "react"
// import { useWalletStore } from "@/store/wallet-store" // Add this import
// import toast from "react-hot-toast" // Add this import

// interface NFT {
//   id: string
//   title: string
//   creator: string
//   price: number
//   image: string
//   audio?: string
//   type: "audio" | "art"
//   tags?: string[]
// }

// interface NFTCardProps {
//   nft: NFT
//   viewMode?: "grid" | "list"
// }

// export function NFTCard({ nft, viewMode = "grid" }: NFTCardProps) {
//   const [isLiked, setIsLiked] = useState(false)
//   const [isHovered, setIsHovered] = useState(false)
//   const { isConnected } = useWalletStore() // Get wallet connection status

//   const handleBuyClick = () => {
//     if (!isConnected) {
//       toast.error("Please connect your wallet first")
//       return
//     }
//     // For now, link to the detail page for the purchase flow
//   }

//   if (viewMode === "list") {
//     return (
//       <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
//         <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
//           <CardContent className="p-6">
//             <div className="flex gap-6">
//               <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
//                 <img src={nft.image || "/placeholder.svg"} alt={nft.title} className="w-full h-full object-cover" />
//                 {nft.type === "audio" && (
//                   <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                     <Play className="w-6 h-6 text-white" />
//                   </div>
//                 )}
//               </div>

//               <div className="flex-1 min-w-0">
//                 <div className="flex items-start justify-between mb-2">
//                   <div>
//                     <h3 className="text-lg font-semibold text-white truncate">{nft.title}</h3>
//                     <p className="text-slate-400 text-sm">by {nft.creator}</p>
//                   </div>
//                   <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 ml-2">
//                     {nft.type === "audio" ? "Audio" : "Art"}
//                   </Badge>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-2xl font-bold text-white">{nft.price} ETH</p>
//                     <p className="text-slate-400 text-sm">≈ ${(nft.price * 2500).toLocaleString()}</p>
//                   </div>

//                   <div className="flex gap-2">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => setIsLiked(!isLiked)}
//                       className={`p-2 ${isLiked ? "text-red-400 border-red-400" : "text-slate-400 border-slate-600"}`}
//                     >
//                       <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
//                     </Button>
//                     <Link href={`/nft/${nft.id}`}>
//                       <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600">
//                         <Eye className="w-4 h-4 mr-2" />
//                         View
//                       </Button>
//                     </Link>
//                     <Button
//                       size="sm"
//                       onClick={handleBuyClick}
//                       className="bg-gradient-to-r from-purple-600 to-cyan-600"
//                       disabled={!isConnected}
//                     >
//                       <Link href={`/nft/${nft.id}`}>
//                         {isConnected ? "Buy Now" : "Connect Wallet"}
//                       </Link>
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     )
//   }

//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//     >
//       <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
//         <CardContent className="p-0">
//           <div className="relative aspect-square overflow-hidden">
//             <img
//               src={nft.image || "/placeholder.svg"}
//               alt={nft.title}
//               className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//             />

//             {nft.type === "audio" && (
//               <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                 <motion.div
//                   animate={{ scale: isHovered ? 1.2 : 1 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                 >
//                   <Play className="w-12 h-12 text-purple-400" />
//                 </motion.div>
//               </div>
//             )}

//             <div className="absolute top-4 left-4">
//               <Badge
//                 variant="secondary"
//                 className="bg-purple-500/20 text-purple-300 border-purple-500/30 backdrop-blur-sm"
//               >
//                 {nft.type === "audio" ? "Audio" : "Art"}
//               </Badge>
//             </div>

//             <div className="absolute top-4 right-4">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={(e) => {
//                   e.preventDefault()
//                   setIsLiked(!isLiked)
//                 }}
//                 className={`p-2 backdrop-blur-sm ${
//                   isLiked
//                     ? "text-red-400 border-red-400 bg-red-400/10"
//                     : "text-slate-400 border-slate-600 bg-slate-900/50"
//                 }`}
//               >
//                 <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
//               </Button>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
//               transition={{ duration: 0.2 }}
//               className="absolute bottom-4 left-4 right-4 flex gap-2"
//             >
//               <Link href={`/nft/${nft.id}`}>
//                 <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 backdrop-blur-sm">
//                   <Eye className="w-4 h-4 mr-2" />
//                   View Details
//                 </Button>
//               </Link>
//               <Button
//                 onClick={handleBuyClick}
//                 className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 backdrop-blur-sm"
//                 disabled={!isConnected}
//               >
//                 <Link href={`/nft/${nft.id}`}>
//                   {isConnected ? "Buy Now" : "Connect Wallet"}
//                 </Link>
//               </Button>
//             </motion.div>
//           </div>

//           <div className="p-6">
//             <div className="flex items-start justify-between mb-3">
//               <div className="min-w-0 flex-1">
//                 <h3 className="text-lg font-semibold text-white truncate">{nft.title}</h3>
//                 <div className="flex items-center gap-2 mt-1">
//                   <Avatar className="w-5 h-5">
//                     <AvatarImage src="/placeholder.svg?height=20&width=20" />
//                     <AvatarFallback className="bg-purple-600 text-white text-xs">
//                       {nft.creator.charAt(0).toUpperCase()}
//                     </AvatarFallback>
//                   </Avatar>
//                   <p className="text-slate-400 text-sm truncate">{nft.creator}</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//               <div>
//                 <p className="text-xl font-bold text-white">{nft.price} ETH</p>
//                 <p className="text-slate-400 text-xs">≈ ${(nft.price * 2500).toLocaleString()}</p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   )
// }













"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Play, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit"
import toast from "react-hot-toast"

interface NFT {
  id: string
  title: string
  creator: string
  price: number
  image: string
  audio?: string
  type: "audio" | "art"
  tags?: string[]
}

interface NFTCardProps {
  nft: NFT
  viewMode?: "grid" | "list"
}

export function NFTCard({ nft, viewMode = "grid" }: NFTCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal()

  const handleBuyClick = () => {
    if (!isConnected && openConnectModal) {
      openConnectModal()
    } else if (isConnected) {
      window.location.href = `/nft/${nft.id}`
    } else {
      toast.error("Wallet connection failed. Please try again.")
    }
  }

  if (viewMode === "list") {
    return (
      <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
        <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex gap-6">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <img src={nft.image || "/placeholder.svg"} alt={nft.title} className="w-full h-full object-cover" />
                {nft.type === "audio" && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white truncate">{nft.title}</h3>
                    <p className="text-slate-400 text-sm">by {nft.creator}</p>
                  </div>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30 ml-2">
                    {nft.type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-white">{nft.price} ETH</p>
                    <p className="text-slate-400 text-sm">≈ ${(nft.price * 2500).toLocaleString()}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsLiked(!isLiked)}
                      className={`p-2 ${isLiked ? "text-red-400 border-red-400" : "text-slate-400 border-slate-600"}`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                    </Button>
                    <Link href={`/nft/${nft.id}`}>
                      <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      onClick={handleBuyClick}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600"
                    >
                      {isConnected ? "Buy Now" : "Connect Wallet"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={nft.image || "/placeholder.svg"}
              alt={nft.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {nft.type === "audio" && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Play className="w-12 h-12 text-purple-400" />
              </div>
            )}
            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className="bg-purple-500/20 text-purple-300 border-purple-500/30 backdrop-blur-sm"
              >
                {nft.type}
              </Badge>
            </div>
            <div className="absolute top-4 right-4">
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.preventDefault()
                  setIsLiked(!isLiked)
                }}
                className={`p-2 backdrop-blur-sm ${
                  isLiked
                    ? "text-red-400 border-red-400 bg-red-400/10"
                    : "text-slate-400 border-slate-600 bg-slate-900/50"
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
              </Button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <Link href={`/nft/${nft.id}`}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 backdrop-blur-sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </Link>
              <Button
                onClick={handleBuyClick}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 backdrop-blur-sm"
              >
                {isConnected ? "Buy Now" : "Connect Wallet"}
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-semibold text-white truncate">{nft.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Avatar className="w-5 h-5">
                    <AvatarImage src="/placeholder.svg?height=20&width=20" />
                    <AvatarFallback className="bg-purple-600 text-white text-xs">
                      {nft.creator.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-slate-400 text-sm truncate">{nft.creator}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold text-white">{nft.price} ETH</p>
                <p className="text-slate-400 text-xs">≈ ${(nft.price * 2500).toLocaleString()}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}