
import { DNA } from "react-loader-spinner";
 
export const Loding = () => {
  return (
     <div className="flex justify-center items-center py-8">
      <DNA
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
      />
    </div>
  )
}
