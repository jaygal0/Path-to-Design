type DesignerProps = {
    firstName: string,
    lastName: string
    contact: {
        email?: string;
        twitter?: string;
        instagram?: string;
        dribble?: string;
    };
    info: {
        coverImage?: string;
        oneLiner?: string;
        position?: string;
        yearlySalaryRange?: string;
        salaryCurrency?: string;
        company?: string;
        companySite?: string;
        personalSite?: string;
        getStarted?: string;
        stayInspired?: string;
        tools?: string[];
        books?: string[];
        advice?: string;
    };
};

export function DesignerDetailBox({ firstName, lastName, info, contact }: DesignerProps) {
    return (
        <div className="flex justify-between p-5 bg-slate-400 rounded-md">
            <div className="flex gap-4">
                <div className="h-20 w-20 bg-slate-50 rounded-full"></div>
                <div className="flex flex-col justify-center">
                    <div className="text-xl font-semibold">{firstName} {lastName}</div>
                    <div>{info.position} at {info.company}</div>
                    <a className="underline" href={info.personalSite} target="_blank">
                        {info.personalSite}
                    </a>
                </div>
            </div>
            <div className="flex flex-col justify-between">
                {
                    info.yearlySalaryRange ? (

                        <div className="font-semibold text-lg">Income: {info.yearlySalaryRange} /yr</div>
                    ) : <div className="font-normal text-lg">Income: Non disclosed</div>
                }
                <div className="flex justify-end gap-5">
                    {/* Email Icon */}
                    {
                        contact.email ? (

                            <a href={`mailto:${contact.email}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.25 4H18.75C19.5801 3.99995 20.3788 4.31755 20.9822 4.88767C21.5856 5.45779 21.948 6.23719 21.995 7.066L22 7.25V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V7.25C1.99995 6.41986 2.31755 5.62117 2.88767 5.01777C3.45779 4.41437 4.23719 4.052 5.066 4.005L5.25 4H18.75H5.25ZM20.5 9.373L12.35 13.663C12.258 13.7116 12.1568 13.7405 12.053 13.7479C11.9492 13.7553 11.845 13.7411 11.747 13.706L11.651 13.664L3.5 9.374V16.75C3.50002 17.1892 3.66517 17.6123 3.96268 17.9354C4.26019 18.2585 4.6683 18.4579 5.106 18.494L5.25 18.5H18.75C19.1893 18.5 19.6126 18.3347 19.9357 18.037C20.2588 17.7392 20.4581 17.3309 20.494 16.893L20.5 16.75V9.373ZM18.75 5.5H5.25C4.81081 5.50002 4.38768 5.66517 4.06461 5.96268C3.74154 6.26019 3.54214 6.6683 3.506 7.106L3.5 7.25V7.679L12 12.152L20.5 7.678V7.25C20.5 6.81065 20.3347 6.38739 20.037 6.06429C19.7392 5.74119 19.3309 5.5419 18.893 5.506L18.75 5.5Z" fill="black" />
                                </svg>
                            </a>
                        ) : ""
                    }
                    {/* X Icon */}
                    {contact.twitter ? (

                        <a href={`http://x.com/${contact.twitter}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.539 22.4999C16.596 22.4999 21.5505 14.9954 21.5505 8.49894C21.5505 8.28894 21.5505 8.07594 21.5415 7.86594C22.5061 7.16767 23.3386 6.30317 24 5.31294C23.099 5.71022 22.1441 5.97205 21.1665 6.08994C22.1963 5.4744 22.9676 4.50589 23.337 3.36444C22.3695 3.93763 21.3105 4.34 20.2065 4.55394C19.4643 3.76348 18.4821 3.23982 17.4121 3.06408C16.3421 2.88834 15.2441 3.07032 14.288 3.58185C13.3319 4.09337 12.5712 4.90588 12.1237 5.89353C11.6761 6.88118 11.5668 7.98884 11.8125 9.04494C9.85461 8.94677 7.93922 8.43814 6.19056 7.55206C4.4419 6.66597 2.89903 5.42221 1.662 3.90144C1.03401 4.98607 0.842361 6.26904 1.12597 7.48984C1.40958 8.71064 2.14718 9.77774 3.189 10.4744C2.40831 10.4479 1.64478 10.2383 0.96 9.86244V9.92994C0.961346 11.0662 1.35496 12.1671 2.07431 13.0466C2.79366 13.9261 3.79462 14.5303 4.908 14.7569C4.48539 14.8734 4.04884 14.9314 3.6105 14.9294C3.30148 14.9304 2.99307 14.9017 2.6895 14.8439C3.00418 15.822 3.61691 16.6772 4.44187 17.2897C5.26683 17.9021 6.2627 18.2412 7.29 18.2594C5.54483 19.6301 3.3891 20.3736 1.17 20.3699C0.778981 20.3716 0.388235 20.349 0 20.3024C2.25227 21.7383 4.86795 22.5008 7.539 22.4999Z" fill="black" />
                            </svg>
                        </a>
                    ) : ""
                    }
                    {/* Instagram Icon */}
                    {
                        contact.instagram ? (
                            <a href={`http://instagram.com/${contact.instagram}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C8.7435 0 8.334 0.015 7.0545 0.072C5.775 0.132 4.9035 0.333 4.14 0.63C3.33914 0.931229 2.61374 1.40374 2.0145 2.0145C1.40411 2.61404 0.931661 3.33936 0.63 4.14C0.333 4.902 0.1305 5.775 0.072 7.05C0.015 8.3325 0 8.7405 0 12.0015C0 15.2595 0.015 15.6675 0.072 16.947C0.132 18.225 0.333 19.0965 0.63 19.86C0.9375 20.649 1.347 21.318 2.0145 21.9855C2.6805 22.653 3.3495 23.064 4.1385 23.37C4.9035 23.667 5.7735 23.8695 7.0515 23.928C8.3325 23.985 8.7405 24 12 24C15.2595 24 15.666 23.985 16.947 23.928C18.2235 23.868 19.098 23.667 19.8615 23.37C20.6618 23.0686 21.3867 22.5961 21.9855 21.9855C22.653 21.318 23.0625 20.649 23.37 19.86C23.6655 19.0965 23.868 18.225 23.928 16.947C23.985 15.6675 24 15.2595 24 12C24 8.7405 23.985 8.3325 23.928 7.0515C23.868 5.775 23.6655 4.902 23.37 4.14C23.0684 3.33934 22.5959 2.61401 21.9855 2.0145C21.3864 1.40351 20.661 0.930968 19.86 0.63C19.095 0.333 18.222 0.1305 16.9455 0.072C15.6645 0.015 15.258 0 11.997 0H12.0015H12ZM10.9245 2.163H12.0015C15.2055 2.163 15.585 2.1735 16.8495 2.232C18.0195 2.2845 18.6555 2.481 19.0785 2.6445C19.638 2.862 20.0385 3.123 20.4585 3.543C20.8785 3.963 21.138 4.362 21.3555 4.923C21.5205 5.3445 21.7155 5.9805 21.768 7.1505C21.8265 8.415 21.8385 8.7945 21.8385 11.997C21.8385 15.1995 21.8265 15.5805 21.768 16.845C21.7155 18.015 21.519 18.6495 21.3555 19.0725C21.1631 19.5935 20.856 20.0647 20.457 20.451C20.037 20.871 19.638 21.1305 19.077 21.348C18.657 21.513 18.021 21.708 16.8495 21.762C15.585 21.819 15.2055 21.8325 12.0015 21.8325C8.7975 21.8325 8.4165 21.819 7.152 21.762C5.982 21.708 5.3475 21.513 4.9245 21.348C4.40325 21.1559 3.93169 20.8494 3.5445 20.451C3.14513 20.0641 2.83758 19.5925 2.6445 19.071C2.481 18.6495 2.2845 18.0135 2.232 16.8435C2.175 15.579 2.163 15.1995 2.163 11.994C2.163 8.79 2.175 8.412 2.232 7.1475C2.286 5.9775 2.481 5.3415 2.646 4.9185C2.8635 4.359 3.1245 3.9585 3.5445 3.5385C3.9645 3.1185 4.3635 2.859 4.9245 2.6415C5.3475 2.4765 5.982 2.2815 7.152 2.2275C8.259 2.1765 8.688 2.1615 10.9245 2.16V2.163ZM18.4065 4.155C18.2174 4.155 18.0301 4.19225 17.8554 4.26461C17.6807 4.33698 17.522 4.44305 17.3883 4.57677C17.2545 4.71048 17.1485 4.86923 17.0761 5.04394C17.0037 5.21864 16.9665 5.4059 16.9665 5.595C16.9665 5.7841 17.0037 5.97135 17.0761 6.14606C17.1485 6.32077 17.2545 6.47952 17.3883 6.61323C17.522 6.74695 17.6807 6.85302 17.8554 6.92539C18.0301 6.99775 18.2174 7.035 18.4065 7.035C18.7884 7.035 19.1547 6.88329 19.4247 6.61323C19.6948 6.34318 19.8465 5.97691 19.8465 5.595C19.8465 5.21309 19.6948 4.84682 19.4247 4.57677C19.1547 4.30671 18.7884 4.155 18.4065 4.155ZM12.0015 5.838C11.1841 5.82525 10.3723 5.97523 9.61347 6.27921C8.85459 6.58319 8.16377 7.03511 7.58123 7.60863C6.99868 8.18216 6.53605 8.86585 6.22026 9.61989C5.90448 10.3739 5.74185 11.1833 5.74185 12.0007C5.74185 12.8182 5.90448 13.6276 6.22026 14.3816C6.53605 15.1356 6.99868 15.8193 7.58123 16.3929C8.16377 16.9664 8.85459 17.4183 9.61347 17.7223C10.3723 18.0263 11.1841 18.1763 12.0015 18.1635C13.6193 18.1383 15.1623 17.4779 16.2975 16.3249C17.4326 15.1719 18.0689 13.6188 18.0689 12.0007C18.0689 10.3827 17.4326 8.82962 16.2975 7.67662C15.1623 6.52363 13.6193 5.86324 12.0015 5.838ZM12.0015 7.9995C13.0625 7.9995 14.08 8.42098 14.8303 9.17122C15.5805 9.92146 16.002 10.939 16.002 12C16.002 13.061 15.5805 14.0785 14.8303 14.8288C14.08 15.579 13.0625 16.0005 12.0015 16.0005C10.9405 16.0005 9.92296 15.579 9.17272 14.8288C8.42248 14.0785 8.001 13.061 8.001 12C8.001 10.939 8.42248 9.92146 9.17272 9.17122C9.92296 8.42098 10.9405 7.9995 12.0015 7.9995Z" fill="black" />
                                </svg>
                            </a>

                        ) : ""
                    }
                    {/* Dribble Icon */}
                    {
                        contact.dribble ? (
                            <a href={`http://dribble.com/${contact.instagram}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.612 24 24 18.624 24 12C24 5.376 18.612 0 12 0ZM19.926 5.532C21.4033 7.33091 22.221 9.58087 22.2435 11.9085C21.9045 11.844 18.5205 11.154 15.111 11.583C15.033 11.415 14.967 11.232 14.889 11.0505C14.6805 10.5555 14.4465 10.0485 14.2125 9.5655C17.9865 8.031 19.7055 5.8185 19.9275 5.5305L19.926 5.532ZM12 1.77C14.6025 1.77 16.9845 2.745 18.795 4.347C18.612 4.608 17.0625 6.6765 13.419 8.043C11.739 4.959 9.879 2.433 9.5925 2.043C10.3817 1.85874 11.1896 1.76712 12 1.77ZM7.6395 2.733C9.01301 4.63657 10.2819 6.61349 11.4405 8.655C6.651 9.93 2.421 9.9045 1.965 9.9045C2.29478 8.35309 2.97848 6.89883 3.96278 5.65512C4.94707 4.41142 6.20536 3.41189 7.6395 2.7345V2.733ZM1.7445 12.015V11.7C2.187 11.715 7.1595 11.7795 12.2745 10.2435C12.573 10.815 12.846 11.4015 13.107 11.9865L12.702 12.1035C7.419 13.809 4.608 18.468 4.3725 18.8595C2.68023 16.9809 1.74398 14.5419 1.7445 12.0135V12.015ZM12 22.2555C9.72232 22.2591 7.50928 21.4985 5.715 20.0955C5.895 19.7175 7.9785 15.7095 13.7565 13.692C13.7835 13.6785 13.7955 13.6785 13.8225 13.6665C14.7966 16.181 15.5284 18.7829 16.008 21.4365C14.742 21.9805 13.3779 22.2592 12 22.2555ZM17.715 20.499C17.61 19.8735 17.0625 16.881 15.723 13.197C18.9375 12.69 21.7485 13.5225 22.0995 13.6395C21.8809 15.0235 21.3784 16.3473 20.6236 17.5278C19.8688 18.7082 18.878 19.7198 17.7135 20.499H17.715Z" fill="black" />
                                </svg>
                            </a>
                        ) : ""
                    }
                </div>
            </div>

        </div >
    )
}