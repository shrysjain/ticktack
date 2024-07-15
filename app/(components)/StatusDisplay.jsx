const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color = "bg-white";
    switch (status.toLowerCase()) {
      case "completed":
        color = "bg-green-200";
        return color;
      case "in progress":
        color = "bg-yellow-200";
        return color;
      case "not started":
        color = "bg-white";
        return color;
      case "stuck":
        color = "bg-red-200";
        return color;
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status.toLowerCase().replace(/(^| )(\w)/g, function (x) {
        return x.toUpperCase();
      })}
    </span>
  );
};

export default StatusDisplay;
