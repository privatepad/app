interface IError {
  message: string;
}

function Error({ message }: IError) {
  return (
    <div className="text-red-500 text-xs">{message}</div>
  );
}

export default Error