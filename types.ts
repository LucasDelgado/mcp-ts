export interface Setup {
    id: number;
    site_id: string;
    origin: string;
    entity_type: string;
    entity_type_id: string;
    collector_id: number;
    created_by: string;
    expired_at: string | null;
    internal_detail: InternalDetail;
    external_detail: Record<string, any> | null;
    created_at: string;
  }
  
  export interface InternalDetail {
    universal_flow: string;
    coupon: string;
    device_id: number;
    source: string;
    strategy: string;
    campaign: string;
    segment: string;
    user_id: string;
    fake_price: boolean;
    plan: string;
    audience_type: string;
    label: string;
  }