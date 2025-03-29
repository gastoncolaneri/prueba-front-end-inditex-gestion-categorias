const AddRow = () => {
  return (
    <div
      className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 cursor-pointer hover:text-zara-100 text-zara-200"
      role="button"
    >
      <div className="text-center">
        <p>+ Agregar una nueva fila</p>
      </div>
    </div>
  );
};

export { AddRow };
