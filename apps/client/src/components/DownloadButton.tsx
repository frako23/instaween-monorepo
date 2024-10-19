const DownloadButton = ({
  fileUrl,
  fileName,
}: {
  fileUrl: string;
  fileName: string;
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="md:text-6xl sm:text-4xl text-2xl bg-darkPurple  text-ghostGreen font-bold w-fit mb-4 hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
    >
      Descargar
    </button>
  );
};

export default DownloadButton;
