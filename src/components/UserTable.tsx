export const UserTable = () => {
  return (
    <table className="table-fixed shadow-lg bg-white">
      <thead>
        <tr>
          <th className="bg-blue-100 border text-left px-8 py-4">name</th>
          <th className="bg-blue-100 border text-left px-8 py-4">picture</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-8 py-4">Maciek Glowacki</td>
          <td className="border px-8 py-4">picture</td>
        </tr>
        <tr>
          <td className="border px-8 py-4">Konrad Linkowski</td>
          <td className="border px-8 py-4">picture</td>
        </tr>
      </tbody>
    </table>
  );
};
