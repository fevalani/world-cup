import React from "react";
import { arrayOf, string } from "prop-types";

const handleShareError = (message) => {
  console.log(message);
};

const urlToObject = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob], "image.jpg", { type: blob.type });
  return file;
};

async function testWebShare({ text, files: filesUrl }) {
  let files;
  // Test compatibility
  if (navigator.share === undefined) {
    handleShareError("Unsupported share feature");
    return;
  }

  // Handle file urls
  if (filesUrl && filesUrl.length > 0) {
    const filesGetter = filesUrl.map((file) => urlToObject(file));
    const newFiles = await Promise.all(filesGetter);

    if (!navigator.canShare || !navigator.canShare({ files: newFiles })) {
      handleShareError("Unsupported share feature");
      return;
    }

    files = newFiles;
  }

  // Share content
  try {
    await navigator.share({ text, files });
  } catch (error) {
    handleShareError(`Error sharing: ${error}`);
  }
}

const ShareButton = ({ ...props }) => {
  return (
    <button
      onClick={() => {
        testWebShare(props);
        console.log(props);
      }}
    />
  );
};

ShareButton.propTypes = {
  text: string,
  files: arrayOf(string),
};

ShareButton.defaultProps = {
  text: null,
  files: null,
};

export default ShareButton;
