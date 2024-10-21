declare global {
    interface Window {
        cloudinary: any;
    }
}

export interface CloudinaryResponse {
    asset_id: string;
    public_id: string;
    version: number;
    version_id: string;
    signature: string;
    width: number;
    height: number;
    format: string;
    resource_type: string;
    created_at: Date;
    tags: string[];
    bytes: number;
    type: string;
    etag: string;
    placeholder: boolean;
    url: string;
    secure_url: string;
    asset_folder: string;
    display_name: string;
    access_mode: string;
}

export type BackgroundType = {
    ghost: string;
    house: string;
    cementery: string;
    zombie: string;
};