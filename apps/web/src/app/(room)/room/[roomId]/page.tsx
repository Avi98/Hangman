import { GameRoom } from "../../components/room";

interface IRoom {
  params: {
    roomId: string;
  };
}

const Room = (props: IRoom) => {
  return (
    <div style={{ width: "400px", height: "400px" }}>
      room id:{`${props.params.roomId}`}
      <GameRoom />
    </div>
  );
};

export default Room;
