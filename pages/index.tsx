import { Inter } from "next/font/google";
import { Web3ModalProvider } from '../src/context/wagmi'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Web3ModalProvider>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <w3m-button />
      </main>
    </Web3ModalProvider>
  );
}
