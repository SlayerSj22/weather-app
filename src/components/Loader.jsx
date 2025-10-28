import React from "react";
import { Loader2 } from "lucide-react";

function Loader() {
  return (
    <div className="text-center mt-6 text-blue-700 flex justify-center items-center gap-2">
      <Loader2 className="animate-spin" /> Loading weather...
    </div>
  );
}

export default Loader;
