import { Broadcast } from "@/types/broadcast";
import { APP_ACCESS_KEY } from '@packages/constants'
import { useEffect, useState } from "react";

interface BroadcastDetailProps {
  campaignKey: string;
}

const BroadcastDetail = ({ campaignKey }: BroadcastDetailProps) => {
  const [broadCast, setBroadCast] = useState<Broadcast | null>(null);

  useEffect(() => {
    async function fetchBroadCast() {
      const data = await fetch(`https://api.shoplive.cloud/v1/campaigns/${APP_ACCESS_KEY}/${campaignKey}`).then(
        (res) => res.json()
      );
      setBroadCast(data);
    }

    fetchBroadCast();
  }, []);


  const formatDate = (timestamp : number) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }


  if (!broadCast) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full h-full flex">
     <div className="w-[50%] max-w-[50%]">
        <div className="w-full h-[800px] max-h-[800px] flex items-center justify-center">
          <img
            src={broadCast.posterUrl || broadCast.poster2Url || broadCast.backgroundUrl}
            className="w-full h-full object-contain"
          />
        </div>
      </div>


      <div className="w-[50%] max-w-[50%] p-[40px]">
        <h1 className="text-[40px] font-bold mb-[4px]">{broadCast.title}</h1>

        <div className="flex items-center">
          <div className="text-[16px] tracking-widest text-gray-500 mr-[16px]">
            {broadCast.campaignKey}
          </div>
          <span>({broadCast.userCount || 0})</span>
        </div>

        <div className="mt-[20px]">
          <div><strong>시작 시간 :</strong> {formatDate(broadCast.startedAt)}</div>
          <div><strong>종료 시간 :</strong> {formatDate(broadCast.endedAt)}</div>
        </div>
       
      </div>
    </div>
  );
}

export default BroadcastDetail;
