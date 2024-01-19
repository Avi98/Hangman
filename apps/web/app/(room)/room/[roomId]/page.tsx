import { ManSVG } from "@repo/ui";

interface IRoom {
  params: {
    roomId: string;
  };
}

const Room = (props: IRoom) => {
  return (
    <div>
      room id:{`${props.params.roomId}`}
      <ManSVG />
    </div>
  );
};

export default Room;
