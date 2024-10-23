function Container({children}) {
  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-md p-5">
        {children}
      </div>
    </div>
  );
}

export default Container;