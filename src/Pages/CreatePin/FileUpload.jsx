import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

export default function FileUpload() {
    return (
        <div class="w-94 bg-olive-200 h-120 rounded-4xl">
            <label 
                for="dropzone-file" 
                className="flex flex-col items-center w-full h-full cursor-pointer pt-48">
            
                <div class="flex flex-col items-center text-body">
                    <ArrowUpCircleIcon className="w-10 h-10 mb-3" />
                    <p class="text-md text-center">Choose a file or drag and 
                                        <br />drop it here
                    </p>
                </div>

                <p class="text-sm text-center mt-auto px-6 pb-8"> 
                    We recommend using high quality .jpg files less than 20 MB or .mp4   
                    files less than 200 MB.
                </p>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>
        </div> 
    );
}

//for pins synthetic data, use a dictionary then usestate and localstorage